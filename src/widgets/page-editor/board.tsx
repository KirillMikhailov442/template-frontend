import useEditor from '@/entities/template/hooks/use-editor';

import { Layer, Stage } from 'react-konva';

import { useDroppable } from '@dnd-kit/core';
import clsx from 'clsx';

import s from './editor.module.scss';
import Widget from './widget';

const BoardWidget = () => {
  const { widgets } = useEditor();
  const { setNodeRef } = useDroppable({
    id: 'board',
  });

  return (
    <div className="grow flex items-center justify-center">
      <div
        className={clsx('w-[600px] h-[900px] bg-[var(--color-white)]', s.board)}
        ref={setNodeRef}>
        <Stage className={s.stage} width={600} height={900}>
          <Layer>
            {widgets.map(widget => (
              <Widget
                key={widget.id}
                id={widget.id}
                x={widget.position.x}
                y={widget.position.y}
                width={widget.size.width}
                height={widget.size.height}
              />
            ))}
          </Layer>
        </Stage>
      </div>
    </div>
  );
};

export default BoardWidget;
