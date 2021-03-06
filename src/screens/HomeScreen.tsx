import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import { Spacer } from "../components/styled";
import useProductStore from "../hooks/useProductStore";
import ProductList from "../components/ProductList";
import Headlines from "../components/common/Headlines";
import Header from "../components/common/Header";

export default function HomeScreen() {
  const featuredProducts = useProductStore(state =>
    state.products.filter(p => p.isFeatured),
  );
  const discountProducts = useProductStore(state =>
    state.products.filter(p => p.isSale),
  );

  return (
    <React.Fragment>
      <Header
        title="InclusiveShop"
        accessibilityLabel="You are at the home screen"
        accessibilityHint="Explore products that are featured or in sale!"
      />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.home}>
        <Headlines
          title="Featured Products"
          subtitle="Our recommendations for you"
          accessibilityLabel="Upon next are our featured products"
          accessibilityHint="You can scroll horizontally through the list to find a product you like"
        />
        <ProductList data={featuredProducts} isHorizontal />
        <Spacer top={4} bottom={8} />
        <Headlines
          title="Products on Sale"
          subtitle="Our best discounts for you"
          accessibilityLabel="Upon next are our products on discount"
          accessibilityHint="You can scroll horizontally through the list to find a product you like"
        />
        <ProductList data={discountProducts} isHorizontal={true} />
        <Spacer top={4} bottom={20} />
      </ScrollView>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  home: {
    paddingTop: 16,
    paddingLeft: 16,
  },
});
