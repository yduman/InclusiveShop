import React from "react";
import { ScrollView } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Image } from "native-base";

import Price from "../components/common/Price";
import ProductDetailTitle from "../components/ProductDetailTitle";
import ProductSizeSelect from "../components/ProductSizeSelect";
import { ProductDetailsContainer, Spacer } from "../components/styled";
import useProductStore from "../../utils/useProductStore";
import { getFullDescription } from "../../utils";
import { ParamList } from "../types/routerTypes";

export default function ProductDetailScreen() {
  const route = useRoute<RouteProp<ParamList, "ProductDetailScreen">>();
  const productId = route.params.productId;

  // array.find() doesn't trigger a re-render when we use toggleFavorite()
  // Therefore, use array.filter() instead which somehow does the trigger
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
        style={{ height: 570 }}
      />
      <ProductDetailsContainer>
        <ProductDetailTitle brand={product.brand} description={description} />
        <Spacer top={2} />
        <Price
          price={product.price}
          salePrice={product.salePrice}
          salePercent={product.salePercent?.slice(1)}
        />
      </ProductDetailsContainer>
      <ProductSizeSelect product={product} />
      <Spacer bottom={16} />
    </ScrollView>
  );
}
