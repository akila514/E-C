import { create } from "zustand";

export type CartItem = {
  name: string;
  price: number;
  amount: number;
};

type CartStore = {
  cartItems: CartItem[];
  totalPrice: number;
  addProduct: (newItem: CartItem) => void;
  removeProduct: (productId: string) => void;
};

export const UseCartStore = create<CartStore>((set) => ({
  cartItems: [],
  totalPrice: 0,
  addProduct: (newItem: CartItem) =>
    set((state) => ({ cartItems: [...state.cartItems, newItem] })),
  removeProduct: (productId: string) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.name !== productId),
    })),
}));
