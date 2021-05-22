import React from "react";
import { TouchableWithoutFeedback, ImageSourcePropType } from "react-native";

import { ProductImage, ProductView, ProductLikeButton } from "./Styled";
import ProductDescription from "./ProductDescription";
import ProductSaleBadge from "./ProductSaleBadge";
import { Product } from "../../utils/data";

export default function ProductCard(props: Product) {
  const { img, brand, title, type, price, salePrice, salePercent } = props;

  return (
    <TouchableWithoutFeedback
      onPress={() => console.log("pressed product card")}>
      <ProductView>
        <ProductLikeButton
          icon="heart-outline"
          size={20}
          onPress={() => console.log("me likey")}
        />
        <ProductImage source={img} resizeMode="cover" />
        <ProductSaleBadge salePrice={salePrice} salePercent={salePercent} />
        <ProductDescription
          brand={brand}
          title={title}
          type={type}
          price={price}
          salePrice={salePrice}
        />
      </ProductView>
    </TouchableWithoutFeedback>
  );
}
