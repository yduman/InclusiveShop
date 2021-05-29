import { ShopState } from "../types/storeTypes";
import { products } from "../utils/data";

export const initialState: ShopState = {
  products,
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
  cart: [],
};
