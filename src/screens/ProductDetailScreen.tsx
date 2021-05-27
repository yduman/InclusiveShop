import React from "react";
import { ScrollView } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Image } from "native-base";
import useProductStore from "../../utils/useProductStore";
import Price from "../components/Price";
import ProductDetailTitle from "../components/ProductDetailTitle";
import { ProductDetailsContainer, Spacer } from "../components/Styled";
import { getFullDescription } from "../../utils";
import ProductSizeSelect from "../components/ProductSizeSelect";

export type ParamList = {
  ProductDetailScreen: {
    productId: number;
  };
};

export default function ProductDetailScreen() {
  const route = useRoute<RouteProp<ParamList, "ProductDetailScreen">>();
  const productId = route.params.productId;

  // array.find() doesn't trigger a re-render when we use toggleFavorite()
  // Therefore, use array.filter() instead which does the trigger
  const product = useProductStore(state => state.products.filter(p => p.id === productId))[0];
  const description = getFullDescription(product);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Image source={product.img} resizeMode="cover" alt="Some alt" style={{ height: 570 }} />
      <ProductDetailsContainer>
        <ProductDetailTitle brand={product.brand} description={description} />
        <Spacer top={2} />
        <Price price={product.price} salePrice={product.salePrice} salePercent={product.salePercent?.slice(1)} />
      </ProductDetailsContainer>
      <ProductSizeSelect product={product} />
      <Spacer bottom={16} />
    </ScrollView>
  );
}
