import React from "react";
import { Appbar, useTheme } from "react-native-paper";
import { StackHeaderProps } from "@react-navigation/stack";
import { RouteProp, useRoute } from "@react-navigation/native";

import useProductStore from "../../utils/useProductStore";
import { ParamList } from "../screens/ProductDetailScreen";
import { Product } from "../../utils/data";
import { getFullDescription } from "../../utils";

export default function ProductDetailNavBar(props: StackHeaderProps) {
  const { navigation, previous } = props;
  const route = useRoute<RouteProp<ParamList, "ProductDetailScreen">>();
  const productId = route.params.productId;
  const product = useProductStore(state => state.products.find(p => p.id === productId)) as Product;
  const description = getFullDescription(product);

  return (
    <Appbar.Header>
      {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={product.brand} subtitle={description} />
      <Appbar.Action icon="cart-outline" onPress={() => {}} />
    </Appbar.Header>
  );
}
