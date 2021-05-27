import React from "react";
import { RouteProp, useRoute } from "@react-navigation/native";

import ProductList from "../components/ProductList";
import PageContainer from "../components/common/PageContainer";
import { ParamList, StackScreens } from "../types/routerTypes";
import useProductStore from "../../utils/useProductStore";

export default function SearchResultScreen() {
  const route = useRoute<RouteProp<ParamList, StackScreens.SearchResult>>();
  const productType = route.params.productType;
  const products = useProductStore(state =>
    state.products.filter(p => p.type === productType),
  );

  return (
    <PageContainer>
      <ProductList data={products} isHorizontal={false} columns={2} />
    </PageContainer>
  );
}
