import React from "react";
import { PixelRatio, Platform, StyleSheet } from "react-native";
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
      {previous ? (
        <Appbar.BackAction
          style={styles.navButton}
          accessibilityLabel="Go back"
          accessibilityHint="Will navigate you back to the search page"
          accessibilityRole="button"
          onPress={navigation.goBack}
        />
      ) : null}
      <Appbar.Content
        accessibilityRole="header"
        title={getTitle(productType, gender)}
        titleStyle={{
          fontSize:
            PixelRatio.getFontScale() >= 2
              ? PixelRatio.getPixelSizeForLayoutSize(3)
              : Platform.OS === "ios"
              ? 17
              : 20,
        }}
      />
    </Appbar.Header>
  );
}

function getTitle(productType: ProductType, gender: Gender) {
  let type: string;

  switch (productType) {
    case "Shirt":
      type = productType + "s";
      break;
    case "Sneaker":
      type = productType + "s";
      break;
    default:
      type = productType;
      break;
  }

  return type + " for " + gender;
}

const styles = StyleSheet.create({
  navButton: {
    width: 48,
    height: 48,
  },
});
