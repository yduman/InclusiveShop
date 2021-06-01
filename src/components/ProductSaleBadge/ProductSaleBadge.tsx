import React from "react";
import { PixelRatio, StyleSheet } from "react-native";
import { Paragraph } from "react-native-paper";

import { SaleBadge } from "../styled";

interface ProductSaleBadgeProps {
  salePrice?: string;
  salePercent?: string;
}

export default function ProductSaleBadge(props: ProductSaleBadgeProps) {
  return (
    <React.Fragment>
      {props.salePrice ? (
        <SaleBadge pixelRatio={PixelRatio.getPixelSizeForLayoutSize(5)}>
          <Paragraph maxFontSizeMultiplier={1.8} style={styles.discount}>
            {props.salePercent}
          </Paragraph>
        </SaleBadge>
      ) : null}
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  discount: {
    color: "white",
    fontWeight: "bold",
  },
});
