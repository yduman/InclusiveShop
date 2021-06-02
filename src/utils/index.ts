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

export function getCartCountAnnouncement(cartItems: CartItem[]) {
  let total = 0;
  cartItems.forEach(item => {
    total += item.count;
  });

  if (total === 0) {
    return "Your cart is currently empty.";
  } else if (total === 1) {
    return `You have ${total} item in your shopping cart`;
  } else {
    return `You have ${total} items in your shopping cart`;
  }
}
