import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ProductImage, ProductView, ProductLikeButton } from "./Styled";
import ProductDescription from "./ProductDescription";
import ProductSaleBadge from "./ProductSaleBadge";
import { Product } from "../../utils/data";
import useProductStore from "../../utils/useProductStore";

export default function ProductCard(product: Product) {
  const navigation = useNavigation();
  const toggleFavorite = useProductStore(state => state.toggleFavorite);

  function handleProductPress() {
    navigation.navigate("ProductDetailScreen", { productId: product.id });
  }

  function handleLikePress() {
    toggleFavorite(product.id);
  }

  return (
    <TouchableWithoutFeedback onPress={handleProductPress}>
      <ProductView>
        <ProductLikeButton
          icon={product.isFavorite ? "heart" : "heart-outline"}
          size={20}
          color="orange"
          onPress={handleLikePress}
        />
        <ProductImage source={product.img} resizeMode="cover" />
        <ProductSaleBadge
          salePrice={product.salePrice}
          salePercent={product.salePercent}
        />
        <ProductDescription
          brand={product.brand}
          type={product.type}
          price={product.price}
          salePrice={product.salePrice}
          color={product.color}
        />
      </ProductView>
    </TouchableWithoutFeedback>
  );
}
