import { CartItem } from "../hooks/useProductStore";
import { Product } from "./data";

export function getFullDescription(product: Product) {
  return product.title + " - " + product.type + " - " + product.color;
}

export function calculateTotalPrice(cartItems: CartItem[]) {
  let total = 0;
  cartItems.forEach(item => {
    total += item.priceNum * item.count;
  });
  return `$${total}`;
}
