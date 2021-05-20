import React from "react";
import { ScrollView, FlatList, StyleSheet } from "react-native";
import { Title, Subheading } from "react-native-paper";

import { products } from "../../utils/data";
import ProductCard from "../components/ProductCard";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.pageContainer}>
      <Title>Featured Products</Title>
      <Subheading>Recommendations for you</Subheading>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={products}
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    padding: 8,
  },
});
