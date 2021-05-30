import React from "react";
import { FlatList } from "react-native";

import { CartItem } from "../../hooks/useProductStore";
import CheckoutCard from "../CheckoutCard";

interface Props {
  data: CartItem[];
}

export default function CheckoutList({ data }: Props) {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={data}
      keyExtractor={(_, idx) => idx.toString()}
      renderItem={({ item, index }) => {
        return <CheckoutCard key={index} {...item} />;
      }}
    />
  );
}
