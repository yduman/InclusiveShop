import React from "react";

import { Actionsheet, Text } from "native-base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import useProductStore from "../../hooks/useProductStore";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  productId: number;
  selectedSize: string;
  currentCount: number;
}

const quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function QuantitySelect({
  isOpen,
  onClose,
  productId,
  selectedSize,
  currentCount,
}: Props) {
  const changeQuantity = useProductStore(state => state.changeQuantity);

  function handleSelection(newQuantity: number) {
    changeQuantity(productId, selectedSize, newQuantity);
    onClose();
  }

  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <Actionsheet.Content>
        {quantities.map((val, idx) => {
          return (
            <Actionsheet.Item
              key={idx}
              endIcon={
                currentCount === val ? (
                  <Icon name="check" size={20} />
                ) : undefined
              }
              backgroundColor={currentCount === val ? "#D3D3D3" : "transparent"}
              onPress={() => handleSelection(val)}>
              <Text>{val}</Text>
            </Actionsheet.Item>
          );
        })}
      </Actionsheet.Content>
    </Actionsheet>
  );
}
