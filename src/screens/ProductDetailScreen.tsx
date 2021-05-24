import React from "react";
import { ScrollView } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

import useProductStore from "../../utils/useProductStore";
import { Product } from "../../utils/data";
import {
  ProductDetailsContainer,
  ProductImageCover,
  ProductLikeButton,
  Spacer,
} from "../components/Styled";
import ProductDetailTitle from "../components/ProductDetailTitle";
import Price from "../components/Price";
import { getFullDescription } from "../../utils";

export type ParamList = {
  ProductDetailScreen: {
    productId: number;
  };
};

export default function ProductDetailScreen() {
  const route = useRoute<RouteProp<ParamList, "ProductDetailScreen">>();
  const toggleFavorite = useProductStore(state => state.toggleFavorite);
  const product = useProductStore(state =>
    state.products.find(p => p.id === route.params.productId),
  ) as Product;
  const description = getFullDescription(product);

  function handleLikePress() {
    toggleFavorite(product.id);
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ProductLikeButton
        icon={product.isFavorite ? "heart" : "heart-outline"}
        onPress={handleLikePress}
      />
      <ProductImageCover source={product.img} resizeMode="cover" />
      <ProductDetailsContainer>
        <ProductDetailTitle brand={product.brand} description={description} />
        <Spacer top={2} />
        <Price
          price={product.price}
          salePrice={product.salePrice}
          salePercent={product.salePercent?.slice(1)}
        />
      </ProductDetailsContainer>
    </ScrollView>
  );
}