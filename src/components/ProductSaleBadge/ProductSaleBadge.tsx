import React from "react";
import { StyleSheet } from "react-native";
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
        <SaleBadge>
          <Paragraph style={styles.discount}>{props.salePercent}</Paragraph>
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
