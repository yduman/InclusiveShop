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
      <Paragraph maxFontSizeMultiplier={1.8}>{props.brand}</Paragraph>
      <Paragraph maxFontSizeMultiplier={1.8} style={styles.descr}>
        {props.description}
      </Paragraph>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  descr: {
    fontWeight: "bold",
  },
});
