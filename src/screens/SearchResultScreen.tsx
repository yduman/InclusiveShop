import React from "react";
import { ScrollView } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

import ProductList from "../components/ProductList";
import { ParamList } from "../types/routerTypes";

export default function SearchResultScreen() {
  const route = useRoute<RouteProp<ParamList, "SearchResultScreen">>();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ProductList data={[]} isHorizontal={false} columns={2} />
    </ScrollView>
  );
}
