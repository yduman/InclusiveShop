import { ProductType } from "../utils/data";

export type ParamList = {
  ProductDetailScreen: {
    productId: number;
  };
  SearchResultScreen: {
    productType: ProductType;
  };
};

export enum StackScreens {
  Login = "Login",
  Shop = "Shop",
  ProductDetail = "ProductDetailScreen",
  SearchResult = "SearchResultScreen",
}
