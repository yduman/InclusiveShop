import create from "zustand";
import { Product, products } from "./data";

interface ShopState {
  products: Product[];
  cart: Product[];
}

interface ProductStore extends ShopState {
  setShopState: (state: ShopState) => void;
}

export const initialState = {
  products,
  cart: [],
};

const useProductStore = create<ProductStore>(set => ({
  ...initialState,
  setShopState: newState => set(() => ({ ...newState })),
}));

export default useProductStore;
