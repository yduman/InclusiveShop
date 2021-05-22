import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useProductStore from "../../utils/useProductStore";

import Headlines from "../components/Headlines";
import ProductList from "../components/ProductList";

export default function FavoriteProductsScreen() {
  const insets = useSafeAreaInsets();

  const favoriteProducts = useProductStore(state =>
    state.products.filter(p => p.isFavorite),
  );

  return (
    <View
      style={{
        paddingTop: 16,
        paddingLeft: 16,
        marginBottom: insets.bottom,
        height: "100%",
      }}>
      <Headlines header="Favorite Products" subHeader="Your loved ones!" />
      <ProductList data={favoriteProducts} isHorizontal={false} columns={2} />
    </View>
  );
}
