import create from "zustand";
import { ProductStore } from "../types/storeTypes";
import { initialState } from "../store/state";
import { handleAddCart, handleFavoriteChange } from "../store/functions";

const useProductStore = create<ProductStore>((set, get) => ({
  ...initialState,
  setShopState: newState => set(() => ({ ...newState })),
  toggleFavorite: id => handleFavoriteChange(id, get, set),
  addToCart: product => handleAddCart(product, get, set),
}));

export default useProductStore;
