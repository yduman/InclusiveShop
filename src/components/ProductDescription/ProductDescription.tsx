import React from "react";
import { Paragraph } from "react-native-paper";

import Price from "../common/Price";

interface Props {
  brand: string;
  type: string;
  price: string;
  color: string;
  salePrice?: string;
}

export default function ProductDescription(props: Props) {
  return (
    <React.Fragment>
      <Paragraph maxFontSizeMultiplier={1.8} numberOfLines={1}>
        {props.brand}
      </Paragraph>
      <Paragraph maxFontSizeMultiplier={1.8} numberOfLines={1}>
        {props.type + " - " + props.color}
      </Paragraph>
      <Price price={props.price} salePrice={props.salePrice} />
    </React.Fragment>
  );
}
