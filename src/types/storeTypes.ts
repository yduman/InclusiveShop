import { Category, Product, ProductType } from "../utils/data";

export type ProductCategory = {
  name: Category;
  types: CategoryType[];
};

export type CategoryType = {
  name: ProductType;
  namePlural: string;
};

export interface ShopState {
  products: Product[];
  categories: ProductCategory[];
  cart: Product[];
}

export interface ProductStore extends ShopState {
  setShopState: (state: ShopState) => void;
  toggleFavorite: (id: number) => void;
  addToCart: (product: Product) => void;
}
