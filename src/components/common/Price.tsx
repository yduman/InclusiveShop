import React from "react";
import { View, StyleSheet } from "react-native";
import { Paragraph, Caption } from "react-native-paper";

interface Props {
  price: string;
  salePrice?: string;
  salePercent?: string;
}

export default function Price(props: Props) {
  const { price, salePrice, salePercent } = props;

  return (
    <View
      accessibilityLabel={
        salePercent
          ? `The price is reduced to ${salePrice}`
          : `The price is ${price}`
      }
      accessibilityHint={
        salePercent ? `A discount by ${salePercent}` : "VAT included"
      }
      accessibilityRole="text">
      {salePercent ? (
        <Caption maxFontSizeMultiplier={1.8} style={styles.salePercent}>
          {salePercent} discount
        </Caption>
      ) : null}
      {salePrice ? (
        <View style={styles.priceContainer}>
          <Paragraph
            maxFontSizeMultiplier={1.8}
            numberOfLines={1}
            style={salePercent ? styles.salePriceDetail : styles.salePrice}>
            {salePrice}
          </Paragraph>
          <Paragraph maxFontSizeMultiplier={1.8} style={styles.strikethrough}>
            {price}
          </Paragraph>
        </View>
      ) : (
        <Paragraph maxFontSizeMultiplier={1.8} numberOfLines={1}>
          {price}
        </Paragraph>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  strikethrough: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
  priceContainer: {
    flexDirection: "row",
  },
  salePrice: {
    marginRight: 8,
    fontWeight: "bold",
  },
  salePriceDetail: {
    marginRight: 8,
    color: "#ac1b1b",
    fontWeight: "bold",
  },
  salePercent: {
    color: "#ac1b1b",
  },
});
