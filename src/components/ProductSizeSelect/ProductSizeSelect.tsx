import React, { useState } from "react";
import { Text, StyleSheet, PixelRatio, Platform } from "react-native";
import { Button, Portal, Snackbar, useTheme } from "react-native-paper";
import { Select, VStack, CheckIcon } from "native-base";
import { useNavigation } from "@react-navigation/native";

import { Product } from "../../utils/data";
import useProductStore from "../../hooks/useProductStore";

interface Props {
  product: Product;
}

export default function ProductSizeSelect({ product }: Props) {
  const [size, setSize] = useState("");
  const [visible, setVisible] = useState(false);
  const { colors } = useTheme();
  const navigation = useNavigation();
  const addToCart = useProductStore(state => state.addToCart);

  function handleToast() {
    addToCart(product.id, size, product.priceNum);
    setVisible(true);
  }

  const onDismiss = () => setVisible(false);

  return (
    <React.Fragment>
      <Portal>
        <Snackbar
          theme={{
            colors: {
              accent: "white",
            },
          }}
          visible={visible}
          onDismiss={onDismiss}
          duration={10000}
          action={{
            label: "Checkout",
            labelStyle: styles.snackbarLabel,
            onPress: () => navigation.navigate("Checkout"),
          }}>
          <Text maxFontSizeMultiplier={1.8}>Added to the shopping cart.</Text>
        </Snackbar>
      </Portal>
      <VStack alignItems="center" space={2} style={styles.select}>
        <Select
          selectedValue={size}
          width={"100%"}
          placeholder="Select your size"
          accessibilityLabel="Select your fitting size"
          accessibilityHint="Selects the size that fits for you"
          onValueChange={val => setSize(val)}
          _selectedItem={{
            bg: "black",
            endIcon: <CheckIcon size={4} />,
          }}>
          {product.sizes.map((val, idx) => {
            return <Select.Item key={idx} label={val} value={val} />;
          })}
        </Select>
        <Button
          onPress={handleToast}
          icon="cart"
          mode="contained"
          color={colors.accent}
          style={styles.cartButton}
          disabled={size.length === 0 || visible}>
          Add to Cart
        </Button>
      </VStack>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  select: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  cartButton: {
    width: "100%",
  },
  snackbarLabel: {
    color: "aquamarine",
    fontSize:
      PixelRatio.getFontScale() >= 2
        ? PixelRatio.getPixelSizeForLayoutSize(3)
        : Platform.OS === "ios"
        ? 11
        : 14,
  },
});
