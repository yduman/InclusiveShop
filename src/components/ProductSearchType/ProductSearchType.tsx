import React from "react";
import { List } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { StackScreens } from "../../types/routerTypes";
import { ProductType } from "../../utils/data";

interface Props {
  displayName: string;
  productType: ProductType;
}

export default function ProductSearchType({ displayName, productType }: Props) {
  const navigation = useNavigation();

  return (
    <List.Item
      title={displayName}
      onPress={() =>
        navigation.navigate(StackScreens.SearchResult, {
          productType,
        })
      }
    />
  );
}
