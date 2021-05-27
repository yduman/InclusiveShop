import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Header from "../components/common/Header";
import ProductList from "../components/ProductList";
import EmptyPage from "../components/common/EmptyPage";
import useProductStore from "../../utils/useProductStore";

export default function FavoriteProductsScreen() {
  const favoriteProducts = useProductStore(state =>
    state.products.filter(p => p.isFavorite),
  );
  const insets = useSafeAreaInsets();

  return (
    <React.Fragment>
      <Header title="Favorites" />
      <View
        style={{
          padding: 16,
          marginBottom: insets.bottom * 3,
        }}>
        {favoriteProducts.length === 0 ? (
          <EmptyPage
            title="No Favorites?"
            subtitle="Like a product in order to see it here."
            img={require("../../assets/images/nofavorites.png")}
          />
        ) : (
          <ProductList
            data={favoriteProducts}
            isHorizontal={false}
            columns={2}
          />
        )}
      </View>
    </React.Fragment>
  );
}
