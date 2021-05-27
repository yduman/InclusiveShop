import React from "react";
import { StyleSheet } from "react-native";
import { List } from "react-native-paper";

import Header from "../components/common/Header";

export default function SearchScreen() {
  return (
    <React.Fragment>
      <Header title="Search" />
      <List.AccordionGroup>
        <List.Accordion
          title="Clothing"
          titleStyle={styles.title}
          left={props => <List.Icon {...props} icon="tshirt-crew" />}
          id="1">
          <List.Item title="Shirts" onPress={() => {}} />
          <List.Item title="Jeans" onPress={() => {}} />
        </List.Accordion>
        <List.Accordion
          title="Shoes"
          titleStyle={styles.title}
          left={props => <List.Icon {...props} icon="shoe-formal" />}
          id="2">
          <List.Item title="Sneaker" onPress={() => {}} />
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
