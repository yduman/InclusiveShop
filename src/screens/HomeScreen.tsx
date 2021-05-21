import React from "react";
import { ScrollView, FlatList, StyleSheet } from "react-native";
import { Title, Subheading, Divider } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import ProductCard from "../components/ProductCard";
import { Spacer } from "../components/Styled";
import useProductStore from "../../utils/useProductStore";

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
      <Title>Featured Products</Title>
      <Subheading>Recommendations for you</Subheading>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={featuredProducts}
        renderItem={({ item }) => {
          return (
            <ProductCard
              title={item.brand}
              subtitle={item.title}
              imgSrc={item.img}
            />
          );
        }}
      />
      <Spacer />
      <Title>Products on Sale</Title>
      <Subheading>Our best discounts for you</Subheading>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={discountProducts}
        renderItem={({ item }) => {
          return (
            <ProductCard
              title={item.brand}
              subtitle={item.title}
              imgSrc={item.img}
            />
          );
        }}
      />
      <Spacer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    paddingTop: 16,
    paddingLeft: 16,
  },
});
