import React from "react";
import { Appbar } from "react-native-paper";
import { StackHeaderProps } from "@react-navigation/stack";
import { RouteProp, useRoute } from "@react-navigation/native";

import useProductStore from "../../hooks/useProductStore";
import { getFullDescription } from "../../utils";
import { Product } from "../../utils/data";
import { ParamList, StackScreens } from "../../types/routerTypes";

export default function ProductDetailNavBar(props: StackHeaderProps) {
  const { navigation, previous } = props;
  const route = useRoute<RouteProp<ParamList, StackScreens.ProductDetail>>();
  const productId = route.params.productId;
  const product = useProductStore(state =>
    state.products.filter(p => p.id === productId),
  )[0] as Product;
  const likeProduct = useProductStore(state => state.toggleFavorite);
  const description = getFullDescription(product);

  return (
    <Appbar.Header>
      {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={product.brand} subtitle={description} />
      <Appbar.Action
        icon={product.isFavorite ? "heart" : "heart-outline"}
        onPress={() => likeProduct(productId)}
      />
    </Appbar.Header>
  );
}
