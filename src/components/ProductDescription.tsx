import React from "react";
import { View, StyleSheet } from "react-native";
import { Paragraph } from "react-native-paper";

interface ProductDescriptionProps {
  brand: string;
  type: string;
  price: string;
  color: string;
  salePrice?: string;
}

export default function ProductDescription(props: ProductDescriptionProps) {
  return (
    <React.Fragment>
      <Paragraph numberOfLines={1}>{props.brand}</Paragraph>
      <Paragraph numberOfLines={1}>
        {props.type + " - " + props.color}
      </Paragraph>
      {renderPrice(props.price, props.salePrice)}
    </React.Fragment>
  );
}

function renderPrice(normalPrice: string, salePrice?: string) {
  if (salePrice) {
    return (
      <View style={styles.priceContainer}>
        <Paragraph numberOfLines={1} style={styles.salePrice}>
          {salePrice}
        </Paragraph>
        <Paragraph style={styles.strikethrough}>{normalPrice}</Paragraph>
      </View>
    );
  }
  return <Paragraph numberOfLines={1}>{normalPrice}</Paragraph>;
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
});
