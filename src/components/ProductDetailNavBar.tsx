import React from "react";
import { Appbar, useTheme } from "react-native-paper";
import { StackHeaderProps } from "@react-navigation/stack";
import { RouteProp, useRoute } from "@react-navigation/native";

import useProductStore from "../../utils/useProductStore";
import { ParamList } from "../screens/ProductDetailScreen";
import { Product } from "../../utils/data";

export default function ProductDetailNavBar(props: StackHeaderProps) {
  const { navigation, previous } = props;
  const route = useRoute<RouteProp<ParamList, "ProductDetailScreen">>();
  const product = useProductStore(state =>
    state.products.find(p => p.id === route.params.productId),
  ) as Product;
  const description =
    product.title + " - " + product.type + " - " + product.color;
  const { colors } = useTheme();

  return (
    <Appbar.Header
      theme={{
        dark: true,
        mode: "adaptive",
      }}>
      {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={product.brand} subtitle={description} />
    </Appbar.Header>
  );
}
