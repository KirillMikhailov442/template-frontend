import { create } from 'zustand';

import type { IWidget } from '../types/widget';

interface CatalogState {
  catalog: IWidget[];
  setCatalog: (catalog: IWidget[]) => void;
}

const useCatalog = create<CatalogState>(set => ({
  catalog: [],
  setCatalog: catalog => set({ catalog }),
  removeItem: (index: number) =>
    set(state => ({
      catalog: state.catalog.filter((_, i) => i !== index),
    })),
}));

export default useCatalog;
