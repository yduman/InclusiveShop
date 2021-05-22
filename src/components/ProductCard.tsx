import React from "react";
import { TouchableWithoutFeedback } from "react-native";

import { ProductImage, ProductView, ProductLikeButton } from "./Styled";
import ProductDescription from "./ProductDescription";
import ProductSaleBadge from "./ProductSaleBadge";
import { Product } from "../../utils/data";
import useProductStore from "../../utils/useProductStore";

export default function ProductCard(product: Product) {
  const {
    id,
    img,
    brand,
    type,
    price,
    salePrice,
    salePercent,
    color,
    isFavorite,
  } = product;

  const toggleFavorite = useProductStore(state => state.toggleFavorite);

  function handleLikePress(productId: number) {
    toggleFavorite(productId);
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => console.log("pressed product card")}>
      <ProductView>
        <ProductLikeButton
          icon={isFavorite ? "heart" : "heart-outline"}
          size={20}
          color="orange"
          onPress={() => handleLikePress(id)}
        />
        <ProductImage source={img} resizeMode="cover" />
        <ProductSaleBadge salePrice={salePrice} salePercent={salePercent} />
        <ProductDescription
          brand={brand}
          type={type}
          price={price}
          salePrice={salePrice}
          color={color}
        />
      </ProductView>
    </TouchableWithoutFeedback>
  );
}
