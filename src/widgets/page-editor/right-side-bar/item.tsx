import type { FC } from 'react';

import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

interface ItemProps {
  id: string;
  type: string;
  text: string;
}

const Item: FC<ItemProps> = props => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: props.id,
      data: props,
    });

  const style = {
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0.5 : 1,
  };
  return (
    <div
      className="w-[200px] h-[200px] bg-[var(--color-blue)] my-2 "
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}>
      {props.text}
    </div>
  );
};

export default Item;
