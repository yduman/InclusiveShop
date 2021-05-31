import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import { IconButton, Text, Modal, Portal, Button } from "react-native-paper";
import { HStack, useDisclose, VStack } from "native-base";

import useProductStore, { CartItem } from "../../hooks/useProductStore";
import { Product } from "../../utils/data";
import { getFullDescription } from "../../utils";
import QuantitySelect from "../QuantitySelect";

export default function CheckoutCard({
  productId,
  selectedSize,
  count,
}: CartItem) {
  const [visible, setVisible] = useState(false);
  const product = useProductStore(state =>
    state.products.find(p => p.id === productId),
  ) as Product;
  const deleteFromCart = useProductStore(state => state.deleteFromCart);
  const { isOpen, onOpen, onClose } = useDisclose();
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };

  return (
    <React.Fragment>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}>
          <Button
            theme={{ colors: { primary: "black" } }}
            mode="text"
            onPress={() => {
              onOpen();
              hideModal();
            }}>
            Change quantity ({count})
          </Button>
          <Button
            theme={{ colors: { primary: "black" } }}
            mode="text"
            onPress={() => {
              deleteFromCart(productId, selectedSize);
              hideModal();
            }}>
            Delete
          </Button>
        </Modal>
      </Portal>
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
        <IconButton icon="dots-horizontal" onPress={showModal} />
      </HStack>
      <QuantitySelect
        isOpen={isOpen}
        onClose={onClose}
        productId={productId}
        selectedSize={selectedSize}
        currentCount={count}
      />
    </React.Fragment>
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
