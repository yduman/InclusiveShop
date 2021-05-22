import React from "react";
import { ImageSourcePropType } from "react-native";

import { ProductImage, ProductView, ProductLikeButton } from "./Styled";
import ProductDescription from "./ProductDescription";
import ProductSaleBadge from "./ProductSaleBadge";

interface NewProductCardProps {
  img: ImageSourcePropType;
  brand: string;
  title: string;
  type: string;
  price: string;
  salePrice?: string;
  salePercent?: string;
}

export default function ProductCard(props: NewProductCardProps) {
  const { img, brand, title, type, price, salePrice, salePercent } = props;

  return (
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
  );
}
