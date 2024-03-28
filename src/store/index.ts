import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { Product } from '../types/product';

type ShoppingCartState = {
  items: Product[];
  addItem: (item: Product) => void;
  removeItem: (slug: Product['slug']) => void;
  clearItems: () => void;
};

export const useShoppingCartStore = create<ShoppingCartState>()(
  devtools(
    persist(
      (set, get) => ({
        items: [],
        addItem:
          (product: Product) => set({ items: [...get().items, product] }),
        removeItem:
          (slug: string) =>
            set({ items: get().items.filter((item) => item.slug !== slug) }),
        clearItems: () => set({ items: [] }),
      }),
      {
        name: "@lifters/persist",
      }
    )
  )
);