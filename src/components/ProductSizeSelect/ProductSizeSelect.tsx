/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useRef, useState } from "react";
import {
  Text,
  StyleSheet,
  PixelRatio,
  Platform,
  AccessibilityInfo,
  findNodeHandle,
} from "react-native";
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
  const selectRef = useRef();

  const handleToast = () => {
    addToCart(product.id, size, product.priceNum);
    setVisible(true);
  };

  const onDismiss = () => setVisible(false);

  return (
    <React.Fragment>
      <Portal>
        <Snackbar
          accessibilityLabel="Successfully added"
          accessibilityHint="This product is now in your shopping cart"
          theme={{
            colors: {
              accent: "white",
            },
          }}
          visible={visible}
          onDismiss={onDismiss}
          duration={2000}
          action={{
            accessibilityElementsHidden: true,
            importantForAccessibility: "no-hide-descendants",
            label: "Checkout",
            labelStyle: styles.snackbarLabel,
            onPress: () => navigation.navigate("Checkout"),
          }}>
          <Text maxFontSizeMultiplier={1.8}>Added to the shopping cart.</Text>
        </Snackbar>
      </Portal>
      <VStack alignItems="center" space={2} style={styles.select}>
        <Select
          _actionSheetContent={{
            onLayout: () => {
              if (selectRef && selectRef.current) {
                // @ts-ignore
                const tag = findNodeHandle(selectRef.current);
                if (tag) {
                  // for some reason you need to call this multiple times
                  // in order to set the focus...
                  // https://github.com/facebook/react-native/issues/30097
                  AccessibilityInfo.setAccessibilityFocus(tag);
                  AccessibilityInfo.setAccessibilityFocus(tag);
                  AccessibilityInfo.setAccessibilityFocus(tag);
                  AccessibilityInfo.setAccessibilityFocus(tag);
                }
              }
            },
          }}
          selectedValue={size}
          width={"100%"}
          placeholder="Select your size"
          placeholderTextColor="black"
          borderColor="black"
          accessibilityLabel={`Size selector. Current choice is: ${
            size ? size : "no size"
          }`}
          accessibilityHint="Selects the size that fits for you"
          onValueChange={val => setSize(val)}
          _selectedItem={{
            bg: "black",
            endIcon: <CheckIcon size={4} />,
          }}>
          <Select.Item
            ref={selectRef}
            accessibilityLabel="Select option: No size"
            accessibilityHint="Selecting it has no effect on your purchases"
            label={"-"}
            value={"-"}
          />
          {product.sizes.map((val, idx) => {
            return (
              <Select.Item
                accessibilityLabel="Select option"
                accessibilityHint={`Size ${val}`}
                key={idx}
                label={val}
                value={val}
              />
            );
          })}
        </Select>
        <Button
          accessibilityLabel="Add this product to your shopping cart"
          accessibilityHint="Your selection will land in your shopping cart"
          accessibilityRole="button"
          onPress={handleToast}
          icon="cart"
          mode="contained"
          color={colors.accent}
          style={styles.cartButton}
          contentStyle={styles.cartButton}
          disabled={size.length === 0 || visible || size === "-"}>
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
    height: 48,
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
