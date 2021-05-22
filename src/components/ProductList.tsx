import React from "react";
import { FlatList } from "react-native";

import { Product } from "../../utils/data";
import ProductCard from "./ProductCard";

interface ProductListProps {
  data: Product[];
}

export default function ProductList(props: ProductListProps) {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={props.data}
      renderItem={({ item }) => {
        return <ProductCard {...item} />;
      }}
    />
  );
}
