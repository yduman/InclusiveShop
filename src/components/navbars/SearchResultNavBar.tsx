import React from "react";
import { Appbar } from "react-native-paper";
import { StackHeaderProps } from "@react-navigation/stack";
import { RouteProp, useRoute } from "@react-navigation/native";

import { ParamList, StackScreens } from "../../types/routerTypes";
import { Gender, ProductType } from "../../utils/data";

export default function SearchResultNavBar(props: StackHeaderProps) {
  const { navigation, previous } = props;
  const route = useRoute<RouteProp<ParamList, StackScreens.SearchResult>>();
  const productType = route.params.productType;
  const gender = route.params.gender;

  return (
    <Appbar.Header>
      {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={getTitle(productType, gender)} />
    </Appbar.Header>
  );
}

function getTitle(productType: ProductType, gender: Gender) {
  let type: string;

  switch (productType) {
    case "Shirt" || "Sneaker":
      type = productType + "s";
      break;
    default:
      type = productType;
      break;
  }

  return type + " for " + gender;
}
