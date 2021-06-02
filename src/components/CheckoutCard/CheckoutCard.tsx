/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Image, AccessibilityInfo } from "react-native";
import { IconButton, Text, Modal, Portal, Button } from "react-native-paper";
import { HStack, useDisclose, VStack } from "native-base";

import useProductStore from "../../hooks/useProductStore";
import { Product } from "../../utils/data";
import { getFullDescription } from "../../utils";
import QuantitySelect from "../QuantitySelect";

interface Props {
  id: number;
  productId: number;
  selectedSize: string;
  count: number;
  cartLength: number;
}

export default function CheckoutCard({
  id,
  productId,
  selectedSize,
  count,
  cartLength,
}: Props) {
  const countSelectRef = useRef();
  const [hasSR, setHasSR] = useState(false);
  const [visible, setVisible] = useState(false);
  const product = useProductStore(state =>
    state.products.find(p => p.id === productId),
  ) as Product;
  const deleteFromCart = useProductStore(state => state.deleteFromCart);

  const { isOpen, onOpen, onClose } = useDisclose();
  const hideModal = () => setVisible(false);
  const showModal = () => setVisible(true);

  useEffect(() => {
    AccessibilityInfo.isScreenReaderEnabled().then(x => setHasSR(x));
  }, []);

  return (
    <React.Fragment>
      <Portal>
        <Modal
          dismissable
          overlayAccessibilityLabel="Close dialog"
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}>
          <Button
            accessibilityLabel="Change quantity dialog button"
            accessibilityHint="Will let you select your desired amount you want for this product"
            theme={{ colors: { primary: "black" } }}
            mode="text"
            onPress={() => {
              onOpen();
              hideModal();
            }}>
            <Text maxFontSizeMultiplier={1.4}>Change quantity ({count})</Text>
          </Button>
          <Button
            accessibilityLabel="Delete product dialog button"
            accessibilityHint="Will delete this product from your shopping cart"
            theme={{ colors: { primary: "black" } }}
            mode="text"
            onPress={() => {
              deleteFromCart(productId, selectedSize);
              hideModal();
            }}>
            <Text maxFontSizeMultiplier={1.4}>Delete</Text>
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
          accessibilityElementsHidden
          importantForAccessibility="no-hide-descendants"
        />
        <VStack
          space={1}
          style={styles.content}
          w="55%"
          accessibilityLabel={`Product ${id + 1} of ${cartLength}`}
          accessibilityHint={`${product.brand} ${product.title} ${product.type}; Price: ${product.price}; Color: ${product.color}; Size: ${selectedSize}; Quantity: ${count}`}>
          <Text
            accessibilityElementsHidden
            importantForAccessibility="no-hide-descendants"
            maxFontSizeMultiplier={1.4}
            style={styles.text}>
            {product.brand}
          </Text>
          <Text
            accessibilityElementsHidden
            importantForAccessibility="no-hide-descendants"
            maxFontSizeMultiplier={1.4}
            style={styles.text}
            numberOfLines={1}>
            {getFullDescription(product)}
          </Text>
          <Text
            accessibilityElementsHidden
            importantForAccessibility="no-hide-descendants"
            maxFontSizeMultiplier={1.4}
            style={styles.price}>
            {product.price}
          </Text>
          <Text
            accessibilityElementsHidden
            importantForAccessibility="no-hide-descendants"
            maxFontSizeMultiplier={1.4}
            style={styles.text}>
            Color: {product.color}
          </Text>
          <Text
            accessibilityElementsHidden
            importantForAccessibility="no-hide-descendants"
            maxFontSizeMultiplier={1.4}
            style={styles.text}>
            Size: {selectedSize}
          </Text>
          <Text
            accessibilityElementsHidden
            importantForAccessibility="no-hide-descendants"
            maxFontSizeMultiplier={1.4}
            style={styles.text}>
            Quantity: {count}
          </Text>
        </VStack>
        {hasSR ? (
          <View>
            <IconButton
              accessibilityLabel="Change quantity"
              accessibilityHint="Select this button to change the quantity you want to purchase for this product"
              icon="numeric"
              onPress={onOpen}
            />
            <IconButton
              accessibilityLabel="Remove product"
              accessibilityHint="Select this button to remove this product from the shopping cart"
              icon="delete"
              onPress={() => deleteFromCart(productId, selectedSize)}
            />
          </View>
        ) : (
          <IconButton
            accessibilityElementsHidden
            importantForAccessibility="no-hide-descendants"
            icon="dots-horizontal"
            onPress={showModal}
          />
        )}
      </HStack>
      <QuantitySelect
        ref={countSelectRef}
        isOpen={isOpen}
        onClose={onClose}
        productId={productId}
        selectedSize={selectedSize}
        currentCount={count}
      />
    </React.Fragment>
  );
}

const containerStyle = { backgroundColor: "white", padding: 20 };
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
