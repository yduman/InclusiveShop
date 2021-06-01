import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";

import ProductDescription from "../ProductDescription";
import ProductSaleBadge from "../ProductSaleBadge";
import { Product } from "../../utils/data";
import { ProductImage, ProductView } from "../styled";
import { StackScreens } from "../../types/routerTypes";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const navigation = useNavigation();

  function handleProductPress() {
    navigation.navigate(StackScreens.ProductDetail, { productId: product.id });
  }

  return (
    <TouchableWithoutFeedback
      onPress={handleProductPress}
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants">
      <ProductView>
        <ProductImage source={product.img} resizeMode="cover" />
        <ProductSaleBadge
          salePrice={product.salePrice}
          salePercent={product.salePercent}
        />
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
