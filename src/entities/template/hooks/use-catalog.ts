import { create } from 'zustand';

interface ICatalogItem {
  id: string;
  name: string;
}
interface CatalogState {
  catalog: ICatalogItem[];
  setCatalog: (catalog: ICatalogItem[]) => void;
  removeItem: (id: string) => void;
}

const useCatalog = create<CatalogState>(set => ({
  catalog: [
    { id: '1', name: 'Погода' },
    { id: '2', name: 'Новости' },
    { id: '3', name: 'Календарь' },
  ],
  setCatalog: catalog => set({ catalog }),
  removeItem: (id: string) =>
    set(state => ({
      catalog: state.catalog.filter(item => item.id !== id),
    })),
}));

export default useCatalog;
