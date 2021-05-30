import create, { GetState, SetState } from "zustand";
import { Category, Product, productData, ProductType } from "../utils/data";

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

export interface ProductCategory {
  name: Category;
  types: CategoryType[];
}

export interface CategoryType {
  name: ProductType;
  namePlural: string;
}

export interface CartItem {
  productId: number;
  selectedSize: string;
  count: number;
}

export interface ShopState {
  products: Product[];
  categories: ProductCategory[];
  favorites: number[];
  cart: CartItem[];
}

export interface ProductStore extends ShopState {
  getState: () => ProductStore;
  resetState: () => void;
  toggleFavorite: (id: number) => void;
  addToCart: (id: number, size: string) => void;
}

const useProductStore = create<ProductStore>((set, get) => ({
  ...initialState,
  getState: () => get(),
  resetState: () => handleResetState(get, set),
  toggleFavorite: id => handleFavoriteChange(id, get, set),
  addToCart: (id, size) => handleAddCart(id, size, get, set),
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
    favorites = favorites.filter(productId => productId !== id);
  } else {
    const product = store.products.find(p => p.id === id) as Product;
    favorites.push(product.id);
  }

  set({ favorites });
}

export function handleAddCart(
  id: number,
  size: string,
  get: GetState<ProductStore>,
  set: SetState<ProductStore>,
) {
  let cart = get().cart;
  const found = cart.find(item => isEqualCartItem(item, id, size));

  if (found) {
    found.count += 1;
    cart = cart.map(item => (isEqualCartItem(item, id, size) ? found : item));
  } else {
    cart.push({ productId: id, selectedSize: size, count: 1 });
  }

  set({ cart });
}

function isEqualCartItem(item: CartItem, id: number, size: string) {
  return item.productId === id && item.selectedSize === size;
}

export default useProductStore;
