import React from "react";
import { Appbar } from "react-native-paper";
import { StackHeaderProps } from "@react-navigation/stack";
import { RouteProp, useRoute } from "@react-navigation/native";

import { ParamList } from "../../types/routerTypes";

export default function SearchResultNavBar(props: StackHeaderProps) {
  const { navigation, previous } = props;
  const route = useRoute<RouteProp<ParamList, "SearchResultScreen">>();
  const productType = route.params.productType;

  return (
    <Appbar.Header>
      {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={productType} />
    </Appbar.Header>
  );
}
