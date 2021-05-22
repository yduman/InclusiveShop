import React from "react";
import { ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Spacer } from "../components/Styled";
import useProductStore from "../../utils/useProductStore";
import ProductList from "../components/ProductList";
import Headlines from "../components/Headlines";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  const featuredProducts = useProductStore(state =>
    state.products.filter(p => p.isFeatured),
  );

  const discountProducts = useProductStore(state =>
    state.products.filter(p => p.isSale),
  );

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        paddingTop: 16,
        paddingLeft: 16,
        marginBottom: insets.bottom,
      }}>
      <Headlines
        header="Featured Products"
        subHeader="Recommendations for you"
      />
      <ProductList data={featuredProducts} isHorizontal />
      <Spacer />
      <Headlines
        header="Products on Sale"
        subHeader="Our best discounts for you"
      />
      <ProductList data={discountProducts} isHorizontal />
      <Spacer />
    </ScrollView>
  );
}
