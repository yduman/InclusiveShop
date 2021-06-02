import React from "react";
import { AccessibilityInfo, findNodeHandle } from "react-native";
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

const QuantitySelect = React.forwardRef((props: Props, ref: any) => {
  const changeQuantity = useProductStore(state => state.changeQuantity);

  function handleSelection(newQuantity: number) {
    changeQuantity(props.productId, props.selectedSize, newQuantity);
    props.onClose();
  }

  return (
    <Actionsheet isOpen={props.isOpen} onClose={props.onClose}>
      <Actionsheet.Content
        onLayout={() => {
          if (ref && ref.current) {
            const tag = findNodeHandle(ref.current);
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
        }}>
        <Actionsheet.Item
          ref={ref}
          accessibilityLabel="No change"
          accessibilityHint="Will close the quantity selection. Selection options range from 1 to 10"
          accessibilityRole="none"
          onPress={props.onClose}>
          <Text>No change</Text>
        </Actionsheet.Item>
        {quantities.map((val, idx) => {
          return (
            <Actionsheet.Item
              accessibilityLabel={`${val}`}
              accessibilityHint=""
              accessibilityRole="none"
              key={idx}
              endIcon={
                props.currentCount === val ? (
                  <Icon name="check" size={20} color="#000" />
                ) : undefined
              }
              backgroundColor={
                props.currentCount === val ? "#D3D3D3" : "transparent"
              }
              onPress={() => handleSelection(val)}>
              <Text>{val}</Text>
            </Actionsheet.Item>
          );
        })}
      </Actionsheet.Content>
    </Actionsheet>
  );
});

export default QuantitySelect;
