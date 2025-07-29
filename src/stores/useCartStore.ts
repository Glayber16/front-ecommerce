import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type CartItem = {
  id: number; 
  name: string;
  image: string;
  price: number;
  quantity: number; 
};

type CartState = {
  items: CartItem[];
  addItem: (product: Omit<CartItem, 'quantity'>) => void;
  removeItem: (productId: number) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],

      addItem: (product) =>
        set((state) => {
          const existingItem = state.items.find((item) => item.id === product.id);
          if (existingItem) {
            const updatedItems = state.items.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
            return { items: updatedItems };
          } else {
            return { items: [...state.items, { ...product, quantity: 1 }] };
          }
        }),

      removeItem: (productId) =>
        set((state) => {
          const existingItem = state.items.find((item) => item.id === productId);
          if (existingItem && existingItem.quantity > 1) {
            const updatedItems = state.items.map((item) =>
              item.id === productId
                ? { ...item, quantity: item.quantity - 1 }
                : item
            );
            return { items: updatedItems };
          } else {
            return { items: state.items.filter((item) => item.id !== productId) };
          }
        }),

      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'shopping-cart-storage',
    }
  )
);