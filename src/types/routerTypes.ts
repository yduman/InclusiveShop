import { Gender, ProductType } from "../utils/data";

export type ParamList = {
  ProductDetailScreen: {
    productId: number;
  };
  SearchResultScreen: {
    productType: ProductType;
    gender: Gender;
  };
};

// eslint-disable-next-line no-shadow
export enum StackScreens {
  Login = "Login",
  Shop = "Shop",
  ProductDetail = "ProductDetailScreen",
  SearchResult = "SearchResultScreen",
}
