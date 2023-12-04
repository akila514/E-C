import { link } from "fs";
import { create } from "zustand";

export type CartItem = {
  name: string;
  productId: string;
  price: number;
  amount: number;
};

type CartStore = {
  cartItems: CartItem[];
  totalPrice: number;
  getCartItems: () => CartItem[];
  addProduct: (newItem: CartItem) => void;
  removeProduct: (productId: string) => void;
  setCartItems: (products: CartItem[]) => void;
};

export const UseCartStore = create<CartStore>((set) => ({
  cartItems: [],
  totalPrice: 0,
  getCartItems: () => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      const cartItems = JSON.parse(cart);
      set(() => ({ cartItems }));
      return cartItems;
    }
    return [];
  },
  addProduct: (newItem: CartItem) =>
    set((state) => {
      const itemExists = state.cartItems.find(
        (item) => item.name === newItem.name
      );
      if (itemExists) {
        itemExists.amount += newItem.amount;
        localStorage.setItem("cart", JSON.stringify([...state.cartItems]));
        return { cartItems: [...state.cartItems] };
      }

      localStorage.setItem(
        "cart",
        JSON.stringify([...state.cartItems, newItem])
      );

      return { cartItems: [...state.cartItems, newItem] };
    }),
  removeProduct: (productId: string) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.productId !== productId),
    })),
  setCartItems: (products: CartItem[]) =>
    set(() => ({
      cartItems: products,
    })),
}));
