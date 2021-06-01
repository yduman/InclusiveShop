import React from "react";
import { StyleSheet, View } from "react-native";
import { Paragraph } from "react-native-paper";

interface Props {
  brand: string;
  description: string;
  type: string;
  color: string;
  model: string;
}

export default function ProductDetailTitle({
  brand,
  description,
  type,
  color,
  model,
}: Props) {
  return (
    <View
      accessibilityLabel={`The ${model} ${type} by ${brand}`}
      accessibilityHint={`The color is ${color}`}
      accessibilityRole="text">
      <Paragraph maxFontSizeMultiplier={1.8}>{brand}</Paragraph>
      <Paragraph maxFontSizeMultiplier={1.8} style={styles.descr}>
        {description}
      </Paragraph>
    </View>
  );
}

const styles = StyleSheet.create({
  descr: {
    fontWeight: "bold",
  },
});
