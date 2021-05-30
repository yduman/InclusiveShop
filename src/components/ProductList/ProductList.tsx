import React from "react";
import { FlatList } from "react-native";

import { Product } from "../../utils/data";
import ProductCard from "../ProductCard";

interface Props {
  data: Product[];
  isHorizontal: boolean;
  columns?: number;
}

export default function ProductList({ isHorizontal, data, columns }: Props) {
  return (
    <FlatList
      horizontal={isHorizontal}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      data={data}
      numColumns={columns}
      renderItem={({ item }) => {
        return <ProductCard {...item} />;
      }}
    />
  );
}
