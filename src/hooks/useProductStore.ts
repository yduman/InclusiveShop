import create, { GetState, SetState } from "zustand";
import { Category, Product, productData, ProductType } from "../utils/data";

export interface ProductCategory {
  name: Category;
  types: CategoryType[];
}

export interface CategoryType {
  name: ProductType;
  namePlural: string;
}

export interface ShopState {
  products: Product[];
  categories: ProductCategory[];
  favorites: number[];
  cart: number[];
}

const initialState: ShopState = {
  products: [...productData],
  categories: [
    {
      name: "Clothing",
      types: [
        { name: "Shirt", namePlural: "Shirts" },
        { name: "Jeans", namePlural: "Jeans" },
      ],
    },
    {
      name: "Shoes",
      types: [{ name: "Sneaker", namePlural: "Sneakers" }],
    },
  ],
  favorites: [],
  cart: [],
};

export interface ProductStore extends ShopState {
  getState: () => ProductStore;
  resetState: () => void;
  toggleFavorite: (id: number) => void;
  addToCart: (product: Product) => void;
}

const useProductStore = create<ProductStore>((set, get) => ({
  ...initialState,
  getState: () => get(),
  resetState: () => handleResetState(get, set),
  toggleFavorite: id => handleFavoriteChange(id, get, set),
  addToCart: product => handleAddCart(product, get, set),
}));

export function handleResetState(
  get: GetState<ProductStore>,
  set: SetState<ProductStore>,
) {
  const storeState = get();
  storeState.products = [...productData];
  storeState.categories = initialState.categories;
  storeState.favorites = [];
  storeState.cart = [];
  set(storeState, true);
}

export function handleFavoriteChange(
  id: number,
  get: GetState<ProductStore>,
  set: SetState<ProductStore>,
) {
  const store = get();
  let favorites = get().favorites;

  if (favorites.includes(id)) {
    favorites = favorites.filter(productId => productId != id);
  } else {
    const product = store.products.find(p => p.id === id) as Product;
    favorites.push(product.id);
  }

  set({ favorites });
}

// TODO: handle remove
export function handleAddCart(
  product: Product,
  get: GetState<ProductStore>,
  set: SetState<ProductStore>,
) {
  const cart = get().cart;
  cart.push(product.id);
  set({ cart });
}

export default useProductStore;
