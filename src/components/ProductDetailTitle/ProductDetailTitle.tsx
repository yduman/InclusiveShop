import React from "react";
import { StyleSheet } from "react-native";
import { Paragraph } from "react-native-paper";

interface Props {
  brand: string;
  description: string;
}

export default function ProductDetailTitle(props: Props) {
  return (
    <React.Fragment>
      <Paragraph>{props.brand}</Paragraph>
      <Paragraph style={styles.descr}>{props.description}</Paragraph>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  descr: {
    fontWeight: "bold",
  },
});
