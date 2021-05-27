import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";

import ProductDescription from "../ProductDescription";
import ProductSaleBadge from "../ProductSaleBadge";
import { Product } from "../../../utils/data";
import { ProductImage, ProductView } from "../styled";

export default function ProductCard(product: Product) {
  const navigation = useNavigation();

  function handleProductPress() {
    navigation.navigate("ProductDetailScreen", { productId: product.id });
  }

  return (
    <TouchableWithoutFeedback onPress={handleProductPress}>
      <ProductView>
        <ProductImage source={product.img} resizeMode="cover" />
        <ProductSaleBadge salePrice={product.salePrice} salePercent={product.salePercent} />
        <ProductDescription
          brand={product.brand}
          type={product.type}
          price={product.price}
          salePrice={product.salePrice}
          color={product.color}
        />
      </ProductView>
    </TouchableWithoutFeedback>
  );
}
