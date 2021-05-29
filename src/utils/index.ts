import { Product } from "./data";

export function getFullDescription(product: Product) {
  return product.title + " - " + product.type + " - " + product.color;
}
