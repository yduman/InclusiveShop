import React from "react";
import Header from "../components/common/Header";
import ProductList from "../components/ProductList";
import FallbackContent from "../components/common/FallbackContent";
import useProductStore from "../hooks/useProductStore";
import PageContainer from "../components/common/PageContainer";

export default function FavoriteProductsScreen() {
  const favoriteProducts = useProductStore(state =>
    state.products.filter(p => p.isFavorite),
  );

  return (
    <React.Fragment>
      <Header title="Favorites" />
      <PageContainer insetBottom>
        {favoriteProducts.length === 0 ? (
          <FallbackContent
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
      </PageContainer>
    </React.Fragment>
  );
}
