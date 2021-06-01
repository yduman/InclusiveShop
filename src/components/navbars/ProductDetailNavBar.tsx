import React from "react";
import { PixelRatio, Platform } from "react-native";
import { Appbar } from "react-native-paper";
import { StackHeaderProps } from "@react-navigation/stack";
import { RouteProp, useRoute } from "@react-navigation/native";

import useProductStore from "../../hooks/useProductStore";
import { getFullDescription } from "../../utils";
import { ParamList, StackScreens } from "../../types/routerTypes";

export default function ProductDetailNavBar(props: StackHeaderProps) {
  const { navigation, previous } = props;
  const route = useRoute<RouteProp<ParamList, StackScreens.ProductDetail>>();
  const productId = route.params.productId;
  const store = useProductStore();
  const favorites = store.favorites;
  const product = store.products.filter(p => p.id === productId)[0];
  const description = getFullDescription(product);
  const likeProduct = store.toggleFavorite;

  return (
    <Appbar.Header>
      {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content
        title={product.brand}
        subtitle={description}
        titleStyle={{
          fontSize:
            PixelRatio.getFontScale() >= 2
              ? PixelRatio.getPixelSizeForLayoutSize(3)
              : Platform.OS === "ios"
              ? 17
              : 20,
        }}
        subtitleStyle={{
          fontSize:
            PixelRatio.getFontScale() >= 2
              ? PixelRatio.getPixelSizeForLayoutSize(1.8)
              : Platform.OS === "ios"
              ? 11
              : 14,
        }}
      />
      <Appbar.Action
        icon={favorites.includes(productId) ? "heart" : "heart-outline"}
        onPress={() => likeProduct(productId)}
      />
    </Appbar.Header>
  );
}
