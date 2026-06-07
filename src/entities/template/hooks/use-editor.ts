import { CELL_SIZE } from '@/shared/constants';

import { create } from 'zustand';

export interface EditorState {
  templateName: string;
  setTemplateName: (name: string) => void;
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
  templateName: '',
  setTemplateName: (name: string) => set({ templateName: name }),
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

  widgets: [],
}));

export default useEditor;
