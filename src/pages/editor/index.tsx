import useEditor from '@/entities/template/hooks/use-editor';
import BoardWidget from '@/widgets/page-editor/board';
import LeftSideBar from '@/widgets/page-editor/left-side-bar';
import RightSideBar from '@/widgets/page-editor/right-side-bar/right-side-bar';

import {
  DndContext,
  MouseSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';

const EditorPage = () => {
  const { addWidgetInBoard } = useEditor();
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
  return (
    <div className="w-full flex">
      <LeftSideBar />
      <DndContext
        {...sensors}
        onDragEnd={event => {
          const { active, over } = event;

          const data = active.data.current;
          const x =
            Number(active.rect.current.translated?.left) - over.rect.left;
          const y = Number(active.rect.current.translated?.top) - over.rect.top;

          addWidgetInBoard({
            id: data.id,
            type: data.type,
            position: { x, y },
            size: { width: 200, height: 200 },
          });
        }}>
        <BoardWidget />
        <RightSideBar />
      </DndContext>
    </div>
  );
};

export default EditorPage;
