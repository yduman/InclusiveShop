import React from "react";
import { View, Text } from "react-native";

import useProductStore, { CartItem } from "../../hooks/useProductStore";
import { Product } from "../../utils/data";
import { CheckoutCardContainer } from "../styled";

export default function CheckoutCard({
  productId,
  selectedSize,
  count,
}: CartItem) {
  const product = useProductStore(state =>
    state.products.find(p => p.id === productId),
  ) as Product;

  return (
    <CheckoutCardContainer>
      <Text>{product.title}</Text>
      <Text>{selectedSize}</Text>
      <Text>{count}</Text>
    </CheckoutCardContainer>
  );
}
