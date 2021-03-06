import React from "react";
import Header from "../components/common/Header";
import ProductList from "../components/ProductList";
import FallbackContent from "../components/common/FallbackContent";
import useProductStore from "../hooks/useProductStore";
import PageContainer from "../components/common/PageContainer";

export default function FavoriteProductsScreen() {
  const store = useProductStore();
  const favorites = store.products.filter(p => store.favorites.includes(p.id));

  return (
    <React.Fragment>
      <Header
        title="Favorites"
        accessibilityLabel="You are at the favorite products screen"
        accessibilityHint="Here you find all products that you liked!"
      />
      {favorites.length === 0 ? (
        <FallbackContent
          title="No Favorites?"
          subtitle="Like a product in order to see it here."
          img={require("../../assets/images/nofavorites.png")}
        />
      ) : (
        <PageContainer withInset>
          <ProductList data={favorites} isHorizontal={false} columns={2} />
        </PageContainer>
      )}
    </React.Fragment>
  );
}
