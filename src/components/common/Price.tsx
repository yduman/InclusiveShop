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
    <React.Fragment>
      {salePercent ? <Caption style={styles.salePercent}>{salePercent} discount</Caption> : null}
      {salePrice ? (
        <View style={styles.priceContainer}>
          <Paragraph numberOfLines={1} style={salePercent ? styles.salePriceDetail : styles.salePrice}>
            {salePrice}
          </Paragraph>
          <Paragraph style={styles.strikethrough}>{price}</Paragraph>
        </View>
      ) : (
        <Paragraph numberOfLines={1}>{price}</Paragraph>
      )}
    </React.Fragment>
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
    color: "red",
    fontWeight: "bold",
  },
  salePercent: {
    color: "red",
  },
});
