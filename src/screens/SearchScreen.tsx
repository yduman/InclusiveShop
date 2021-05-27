import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { List } from "react-native-paper";

import Header from "../components/common/Header";
import { StackScreens } from "../types/routerTypes";

export default function SearchScreen() {
  const navigation = useNavigation();

  return (
    <React.Fragment>
      <Header title="Search" />
      <List.AccordionGroup>
        <List.Accordion
          title="Clothing"
          titleStyle={styles.title}
          left={props => <List.Icon {...props} icon="tshirt-crew" />}
          id="1">
          <List.Item
            title="Shirts"
            onPress={() =>
              navigation.navigate(StackScreens.SearchResult, {
                productType: "Shirt",
              })
            }
          />
          <List.Item
            title="Jeans"
            onPress={() =>
              navigation.navigate(StackScreens.SearchResult, {
                productType: "Jeans",
              })
            }
          />
        </List.Accordion>
        <List.Accordion
          title="Shoes"
          titleStyle={styles.title}
          left={props => <List.Icon {...props} icon="shoe-formal" />}
          id="2">
          <List.Item
            title="Sneakers"
            onPress={() =>
              navigation.navigate(StackScreens.SearchResult, {
                productType: "Sneaker",
              })
            }
          />
        </List.Accordion>
      </List.AccordionGroup>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
  },
});
