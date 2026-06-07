import useCatalog from '@/entities/template/hooks/use-catalog';
import useEditor from '@/entities/template/hooks/use-editor';
import useGetTemplate from '@/entities/template/hooks/use-get-template';
import useUpdateTemplate from '@/entities/template/hooks/use-update-template';
import type { IWidget } from '@/entities/template/types/widget';
import { useDebounce } from '@/shared/hooks/use-debounce';
import ErrorMessage from '@/shared/ui/ErrorMessage';
import Loading from '@/shared/ui/Loading';
import BoardWidget from '@/widgets/page-editor/board';
import LeftSideBar from '@/widgets/page-editor/left-side-bar';
import RightSideBar from '@/widgets/page-editor/right-side-bar/right-side-bar';

import { useEffect } from 'react';
import { useParams } from 'react-router';

import {
  DndContext,
  MouseSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type Over,
} from '@dnd-kit/core';

const EditorPage = () => {
  const { addWidgetInBoard } = useEditor();
  const { removeItem } = useCatalog();
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        delay: 100,
        tolerance: 5,
      },
    }),
    useSensor(PointerSensor, {
      activationConstraint: {
        delay: 100,
        tolerance: 5,
      },
    }),
  );

  const templateId = useParams<{ templateId: string }>().templateId;
  const { isLoading, data, isError, isSuccess } = useGetTemplate(
    String(templateId),
  );
  const updateTemplate = useUpdateTemplate(String(templateId));
  const editor = useEditor();
  const { catalog } = useCatalog();

  useEffect(() => {
    if (isSuccess) {
      editor.setTemplateName(data.name);

      if (data.widgets) {
        console.log(data.widgets);
        data.widgets.forEach(widget => {
          editor.addWidgetInBoard({
            id:
              catalog.find(item => item.name === widget.name)?.id ||
              widget.name,
            type: widget.name,
            position: { x: widget.x, y: widget.y },
            size: { width: widget.width, height: widget.height },
          });
        });
      }
    }
  }, [isSuccess]);

  const debouncedData = useDebounce(editor, 500);

  useEffect(() => {
    if (editor.templateName === '') return;
    const widgets: IWidget[] = Object.values(editor.widgets).map(widget => ({
      name: widget.id,
      x: widget.position.x,
      y: widget.position.y,
      width: widget.size.width,
      height: widget.size.height,
    }));
    // @ts-ignore
    updateTemplate.mutate({ name: editor.templateName, widgets: widgets });
  }, [debouncedData]);

  if (isError) {
    return <ErrorMessage />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="w-full flex">
      <LeftSideBar />
      <DndContext
        {...sensors}
        onDragEnd={event => {
          const { active, over } = event;

          const data = active.data.current as {
            id: string;
            type: string;
          };
          const x =
            Number(active.rect.current.translated?.left) -
            (over as Over).rect.left;
          const y =
            Number(active.rect.current.translated?.top) -
            (over as Over).rect.top;

          addWidgetInBoard({
            id: data.id,
            type: data.type,
            position: { x, y },
            size: { width: 200, height: 200 },
          });
          removeItem(data.id);
        }}>
        <BoardWidget />
        <RightSideBar />
      </DndContext>
    </div>
  );
};

export default EditorPage;
