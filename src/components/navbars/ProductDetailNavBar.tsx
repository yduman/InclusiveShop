import React, { useEffect, useState } from "react";
import { PixelRatio, Platform, AccessibilityInfo } from "react-native";
import { Appbar } from "react-native-paper";
import { StackHeaderProps } from "@react-navigation/stack";
import { RouteProp, useRoute } from "@react-navigation/native";

import useProductStore from "../../hooks/useProductStore";
import { getCartCountAnnouncement, getFullDescription } from "../../utils";
import { ParamList, StackScreens } from "../../types/routerTypes";

export default function ProductDetailNavBar({
  navigation,
  previous,
}: StackHeaderProps) {
  const [isScreenReaderEnabled, setIsScreenReaderEnabled] = useState(false);
  const route = useRoute<RouteProp<ParamList, StackScreens.ProductDetail>>();
  const productId = route.params.productId;
  const store = useProductStore();
  const favorites = store.favorites;
  const product = store.products.filter(p => p.id === productId)[0];
  const description = getFullDescription(product);
  const likeProduct = store.toggleFavorite;
  const isLiked = favorites.includes(productId);
  const cartAnnouncement = getCartCountAnnouncement(store.cart);

  useEffect(() => {
    AccessibilityInfo.isScreenReaderEnabled().then(isEnabled =>
      setIsScreenReaderEnabled(isEnabled),
    );
  }, []);

  return (
    <Appbar.Header>
      {previous ? (
        <Appbar.BackAction
          accessibilityLabel="Go back"
          accessibilityHint="Will navigate you back to the previous page"
          accessibilityRole="button"
          onPress={navigation.goBack}
        />
      ) : null}
      <Appbar.Content
        accessibilityRole="header"
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
        accessibilityRole="button"
        accessibilityLabel="Add to favorites"
        accessibilityHint={`Adds this product to your favorites list. Currently ${
          isLiked ? "in your list" : "not in your list"
        }`}
        icon={isLiked ? "heart" : "heart-outline"}
        onPress={() => likeProduct(productId)}
      />
      {isScreenReaderEnabled ? (
        <Appbar.Action
          accessibilityRole="button"
          accessibilityLabel="Shopping Cart"
          accessibilityHint={cartAnnouncement}
          icon="cart"
          onPress={() => navigation.navigate("Checkout")}
        />
      ) : null}
    </Appbar.Header>
  );
}
