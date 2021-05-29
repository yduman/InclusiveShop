import React from "react";
import { View, StyleSheet } from "react-native";
import { List } from "react-native-paper";

interface Props {
  id: number;
  category: string;
  children?: React.ReactNode;
}

export default function ProductSearchCategory({
  id,
  category,
  children,
}: Props) {
  return (
    <List.Accordion title={category} titleStyle={styles.title} id={String(id)}>
      <View style={styles.items}>{children}</View>
    </List.Accordion>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
  },
  items: {
    paddingLeft: 20,
  },
});
