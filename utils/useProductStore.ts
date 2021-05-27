import create, { GetState, SetState } from "zustand";
import { Product, products } from "./data";

interface ShopState {
  products: Product[];
  cart: Product[];
}

interface ProductStore extends ShopState {
  setShopState: (state: ShopState) => void;
  toggleFavorite: (id: number) => void;
  addToCart: (product: Product) => void;
}

export const initialState = {
  products,
  cart: [],
};

const useProductStore = create<ProductStore>((set, get) => ({
  ...initialState,
  setShopState: newState => set(() => ({ ...newState })),
  toggleFavorite: id => handleFavoriteChange(id, get, set),
  addToCart: product => handleAddCart(product, get, set),
}));

function handleFavoriteChange(id: number, get: GetState<ProductStore>, set: SetState<ProductStore>) {
  const products = get().products;
  let product = products.find(p => p.id === id) as Product;
  product.isFavorite = !product.isFavorite;
  set({ products });
}

function handleAddCart(product: Product, get: GetState<ProductStore>, set: SetState<ProductStore>) {
  const state = get();
  state.cart.push(product);
  set(state);
}

export default useProductStore;
