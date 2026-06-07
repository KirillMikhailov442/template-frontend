import { CELL_SIZE } from '@/shared/constants';

import { create } from 'zustand';

export interface EditorState {
  isDragging: boolean;
  setIsDragging: (isDragging: boolean) => void;

  addWidgetInBoard: (widget: Widget) => void;
  updateWidgetInBoard: (id: string, updatedProperties: Partial<Widget>) => void;
  removeWidgetInBoard: (id: string) => void;
  widgets: Widget[];
}

export interface Widget {
  id: string;
  type: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
}

const snapToGrid = (pos: number) => {
  return Math.round(pos / CELL_SIZE) * CELL_SIZE;
};

const useEditor = create<EditorState>()(set => ({
  isDragging: false,
  setIsDragging: isDragging => set({ isDragging }),

  addWidgetInBoard: (widget: Widget) =>
    set(state => ({
      widgets: [
        ...(state.widgets || []),
        {
          id: widget.id,
          type: widget.type,
          position: {
            x: snapToGrid(widget.position.x),
            y: snapToGrid(widget.position.y),
          },
          size: widget.size,
        },
      ],
    })),

  updateWidgetInBoard: (id: string, updatedProperties: Partial<Widget>) =>
    set(state => ({
      widgets: state.widgets?.map(widget =>
        widget.id === id ? { ...widget, ...updatedProperties } : widget,
      ),
    })),

  removeWidgetInBoard: (id: string) =>
    set(state => ({
      widgets: state.widgets?.filter(widget => widget.id !== id),
    })),

  widgets: [
    {
      id: '1',
      type: 'text',
      position: { x: 100, y: 100 },
      size: { width: 200, height: 400 },
    },
    {
      id: '2',
      type: 'text',
      position: { x: 100, y: 100 },
      size: { width: 200, height: 200 },
    },
    {
      id: '3',
      type: 'text',
      position: { x: 100, y: 100 },
      size: { width: 300, height: 200 },
    },
  ],
}));

export default useEditor;
