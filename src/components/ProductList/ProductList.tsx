import React from "react";
import { View, FlatList } from "react-native";

import { Product } from "../../utils/data";
import ProductCard from "../ProductCard";

interface Props {
  data: Product[];
  isHorizontal: boolean;
  columns?: number;
}

function costHint(product: Product) {
  if (product.isSale) {
    return `is reduced from ${product.price} to ${product.salePrice}. That is a discount by ${product.salePercent}`;
  } else {
    return `costs ${product.price}`;
  }
}

export default function ProductList({ isHorizontal, data, columns }: Props) {
  return (
    <FlatList
      horizontal={isHorizontal}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      data={data}
      numColumns={columns}
      renderItem={({ item, index }) => {
        return (
          <View
            accessibilityLabel={`Product ${index + 1} out of ${
              data.length + 1
            }`}
            accessibilityHint={`${item.brand} ${item.type}, the color is ${
              item.color
            } and ${costHint(item)}`}
            accessibilityRole="button">
            <ProductCard product={item} />
          </View>
        );
      }}
    />
  );
}
