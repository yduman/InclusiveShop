import React, { useState } from "react";
import { StyleSheet } from "react-native";
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
    addToCart(product.id, size);
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
          duration={3000}
          action={{
            label: "Checkout",
            labelStyle: styles.snackbarLabel,
            onPress: () => navigation.navigate("Checkout"),
          }}>
          Added to the shopping cart.
        </Snackbar>
      </Portal>
      <VStack alignItems="center" space={2} style={styles.select}>
        <Select
          selectedValue={size}
          width={"100%"}
          accessibilityLabel="Select your fitting size"
          placeholder="Select your size"
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
  },
});
