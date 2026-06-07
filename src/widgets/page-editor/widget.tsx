import useEditor from '@/entities/template/hooks/use-editor';
import { CELL_SIZE } from '@/shared/constants';

import { useState, type FC } from 'react';
import { Group, Rect } from 'react-konva';

interface WidgetProps {
  id: string;
  x?: number;
  y?: number;
  width: number;
  height: number;
  text: string;
}

const snapToGrid = (pos: number) => {
  return Math.round(pos / CELL_SIZE) * CELL_SIZE;
};

const Widget: FC<WidgetProps> = ({ id, x = 0, y = 0, width, height, text }) => {
  const [positiion, setPosition] = useState({ x, y });
  const { updateWidgetInBoard } = useEditor();
  const color = () => {
    switch (text) {
      case 'Погода':
        return 'lightblue';
      case 'Новости':
        return 'lightgreen';
      case 'Text':
        return 'lightyellow';
      default:
        return 'lightgray';
    }
  };
  return (
    <Group
      id={id}
      x={positiion.x}
      y={positiion.y}
      width={width}
      height={height}
      draggable
      onDragEnd={event => {
        const newX = snapToGrid(event.target.x());
        const newY = snapToGrid(event.target.y());

        setPosition({
          x: newX,
          y: newY,
        });
        updateWidgetInBoard(id, {
          position: { x: newX, y: newY },
          size: { width, height },
        });
      }}
      dragBoundFunc={pos => {
        const newX = snapToGrid(pos.x);
        const newY = snapToGrid(pos.y);

        setPosition({
          x: newX,
          y: newY,
        });

        return {
          x: newX,
          y: newY,
        };
      }}
      onDragMove={event => {
        const newX = snapToGrid(event.target.x());
        const newY = snapToGrid(event.target.y());
        setPosition({
          x: newX,
          y: newY,
        });
      }}>
      <Rect
        width={width}
        height={height}
        fill={color()}
        stroke="black"
        strokeWidth={2}></Rect>
    </Group>
  );
};

export default Widget;
