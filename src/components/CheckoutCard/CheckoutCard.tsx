import React from "react";
import { StyleSheet, Image } from "react-native";
import { IconButton, Text } from "react-native-paper";
import { HStack, VStack } from "native-base";

import useProductStore, { CartItem } from "../../hooks/useProductStore";
import { Product } from "../../utils/data";
import { getFullDescription } from "../../utils";

export default function CheckoutCard({
  productId,
  selectedSize,
  count,
}: CartItem) {
  const product = useProductStore(state =>
    state.products.find(p => p.id === productId),
  ) as Product;

  return (
    <HStack
      style={styles.cardContainer}
      space={2}
      justifyContent="space-between">
      <Image
        source={product.img}
        resizeMode="cover"
        style={styles.img}
        accessibilityIgnoresInvertColors
      />
      <VStack space={1} style={styles.content} w="55%">
        <Text style={styles.text}>{product.brand}</Text>
        <Text style={styles.text} numberOfLines={1}>
          {getFullDescription(product)}
        </Text>
        <Text style={styles.price}>{product.price}</Text>
        <Text style={styles.text}>Color: {product.color}</Text>
        <Text style={styles.text}>Size: {selectedSize}</Text>
        <Text style={styles.text}>Quantity: {count}</Text>
      </VStack>
      <IconButton icon="dots-horizontal" onPress={() => console.log("more")} />
    </HStack>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },
  img: {
    height: 150,
    width: 110,
  },
  content: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  price: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 12,
  },
  text: {
    fontSize: 12,
  },
});
