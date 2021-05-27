import React from "react";
import { View } from "react-native";

import Header from "../components/common/Header";
import ProductList from "../components/ProductList";
import EmptyPage from "../components/common/EmptyPage";
import useProductStore from "../../utils/useProductStore";

export default function FavoriteProductsScreen() {
  const favoriteProducts = useProductStore(state => state.products.filter(p => p.isFavorite));

  return (
    <React.Fragment>
      <Header title="Favorites" />
      <View
        style={{
          paddingTop: 16,
          paddingLeft: 16,
          height: "100%",
        }}>
        {favoriteProducts.length === 0 ? (
          <EmptyPage
            title="No Favorites?"
            subtitle="Like a product in order to see it here."
            img={require("../../assets/images/nofavorites.png")}
          />
        ) : (
          <ProductList data={favoriteProducts} isHorizontal={false} columns={2} />
        )}
      </View>
    </React.Fragment>
  );
}
