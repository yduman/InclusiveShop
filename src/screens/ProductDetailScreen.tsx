import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Image } from "native-base";

import Price from "../components/common/Price";
import ProductDetailTitle from "../components/ProductDetailTitle";
import ProductSizeSelect from "../components/ProductSizeSelect";
import { ProductDetailsContainer, Spacer } from "../components/styled";
import useProductStore from "../hooks/useProductStore";
import { getFullDescription } from "../utils";
import { ParamList, StackScreens } from "../types/routerTypes";

export default function ProductDetailScreen() {
  const route = useRoute<RouteProp<ParamList, StackScreens.ProductDetail>>();
  const productId = route.params.productId;
  const product = useProductStore(state =>
    state.products.filter(p => p.id === productId),
  )[0];
  const description = getFullDescription(product);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Image
        source={product.img}
        resizeMode="cover"
        alt="Some alt"
        style={styles.img}
        accessibilityElementsHidden
        accessibilityIgnoresInvertColors
        importantForAccessibility="no-hide-descendants"
      />
      <ProductDetailsContainer>
        <ProductDetailTitle
          brand={product.brand}
          description={description}
          type={product.type}
          color={product.color}
          model={product.title}
        />
        <Spacer top={2} />
        <Price
          price={product.price}
          salePrice={product.salePrice}
          salePercent={product.salePercent?.slice(1)}
        />
      </ProductDetailsContainer>
      <ProductSizeSelect product={product} />
      <Spacer top={24} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  img: {
    height: 570,
  },
});
