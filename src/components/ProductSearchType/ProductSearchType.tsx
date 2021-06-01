import React from "react";
import { List } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { StackScreens } from "../../types/routerTypes";
import { Gender, ProductType } from "../../utils/data";

interface Props {
  displayName: string;
  productType: ProductType;
  gender: Gender;
}

export default function ProductSearchType({
  displayName,
  productType,
  gender,
}: Props) {
  const navigation = useNavigation();

  return (
    <List.Item
      accessibilityLabel={displayName}
      accessibilityHint={`Will list all ${displayName} we have in stock.`}
      accessibilityRole="button"
      title={displayName}
      onPress={() =>
        navigation.navigate(StackScreens.SearchResult, {
          productType,
          gender,
        })
      }
    />
  );
}
