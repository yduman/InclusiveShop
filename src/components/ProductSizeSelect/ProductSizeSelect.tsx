import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Button, useTheme } from "react-native-paper";
import { Select, VStack, CheckIcon, useToast } from "native-base";
import { Product } from "../../../utils/data";
import useProductStore from "../../../utils/useProductStore";

interface Props {
  product: Product;
}

export default function ProductSizeSelect(props: Props) {
  const { product } = props;
  const [size, setSize] = useState("");
  const { colors } = useTheme();
  const toast = useToast();
  const addToCart = useProductStore(state => state.addToCart);

  function handleToast() {
    if (size.length === 0) {
      toast.show({
        title: "Select a size!",
        description: "You need to select a size in order to buy it.",
        status: "error",
        placement: "top",
      });
    } else {
      addToCart(product);
      toast.show({
        title: "In your cart!",
        description: `Successfully added size ${size} to your cart.`,
        status: "success",
        placement: "top",
      });
    }
  }

  return (
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
      <Button onPress={handleToast} icon="cart" mode="contained" color={colors.accent} style={styles.cartButton}>
        Add to Cart
      </Button>
    </VStack>
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
});
