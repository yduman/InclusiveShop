import React from "react";
import { Button, useTheme } from "react-native-paper";
import { Select, VStack, HStack, CheckIcon } from "native-base";
import ProductLikeButton from "./ProductLikeButton";

export default function ProductSizeSelect() {
  const [size, setSize] = React.useState("");
  const { colors } = useTheme();
  return (
    <VStack alignItems="center" space={2}>
      <Select
        selectedValue={size}
        width={0.9}
        accessibilityLabel="Select your favorite programming language"
        placeholder="Select your size"
        onValueChange={val => setSize(val)}
        _selectedItem={{
          bg: "cyan.600",
          endIcon: <CheckIcon size={4} />,
        }}>
        <Select.Item label="S" value="s" />
        <Select.Item label="M" value="m" />
        <Select.Item label="L" value="l" />
        <Select.Item label="XL" value="xl" />
        <Select.Item label="XXL" value="xxl" />
      </Select>
      <Button mode="contained" color={colors.accent}>
        Add to Cart
      </Button>
    </VStack>
  );
}
