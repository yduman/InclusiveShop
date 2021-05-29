import { GetState, SetState } from "zustand";
import { ProductStore } from "../types/storeTypes";
import { Product } from "../utils/data";

export function handleFavoriteChange(
  id: number,
  get: GetState<ProductStore>,
  set: SetState<ProductStore>,
) {
  const products = get().products;
  let product = products.find(p => p.id === id) as Product;
  product.isFavorite = !product.isFavorite;
  set({ products });
}

export function handleAddCart(
  product: Product,
  get: GetState<ProductStore>,
  set: SetState<ProductStore>,
) {
  const state = get();
  state.cart.push(product);
  set(state);
}
