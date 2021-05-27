import React from "react";
import { FlatList } from "react-native";

import { Product } from "../../../utils/data";
import ProductCard from "../ProductCard";

interface ProductListProps {
  data: Product[];
  isHorizontal: boolean;
  columns?: number;
}

export default function ProductList(props: ProductListProps) {
  return (
    <FlatList
      horizontal={props.isHorizontal}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      data={props.data}
      numColumns={props.columns}
      renderItem={({ item }) => {
        return <ProductCard {...item} />;
      }}
    />
  );
}
