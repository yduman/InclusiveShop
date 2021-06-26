import React from "react";
import { Text, StyleSheet, Image, Alert, View } from "react-native";
import { VStack, HStack } from "native-base";
import { Button, useTheme } from "react-native-paper";
import { NavigationProp, useNavigation } from "@react-navigation/native";

import useProductStore from "../../hooks/useProductStore";
import { calculateTotalPrice } from "../../utils";

const checkoutAlert = (
  emptyCart: () => void,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: NavigationProp<any>,
) => {
  Alert.alert(
    "Your order has been received!",
    "Thank you for purchasing at InclusiveShop.",
    [
      {
        text: "Go to Home",
        onPress: () => {
          emptyCart();
          navigation.navigate("Home");
        },
      },
    ],
  );
};

// TODO: investigate payment image refactoring by index.ts on images folder
// map on ["Visa", ...]
export default function CheckoutNotice() {
  const { colors } = useTheme();
  const store = useProductStore();
  const emptyCart = useProductStore(state => state.emptyCart);
  const totalPrice = calculateTotalPrice(store.cart);
  const navigation = useNavigation();

  return (
    <VStack style={styles.container} space={4}>
      <HStack
        justifyContent="space-between"
        accessibilityLabel="Total Price"
        accessibilityHint={`${totalPrice}`}
        accessibilityRole="header">
        <Text
          maxFontSizeMultiplier={1.8}
          style={styles.total}
          accessibilityElementsHidden
          importantForAccessibility="no-hide-descendants">
          Total
        </Text>
        <Text
          maxFontSizeMultiplier={1.8}
          style={styles.total}
          accessibilityElementsHidden
          importantForAccessibility="no-hide-descendants">
          {totalPrice}
        </Text>
      </HStack>
      <Button
        onPress={() => checkoutAlert(emptyCart, navigation)}
        mode="contained"
        color={colors.accent}
        contentStyle={styles.checkout}>
        <Text maxFontSizeMultiplier={1.8}>Checkout</Text>
      </Button>
      <HStack
        space={5}
        justifyContent="center"
        accessibilityRole="header"
        accessibilityLabel="Payment methods"
        accessibilityHint="Visa, MasterCard, American Express, PayPal, Apple Pay and Google Pay">
        <Image
          source={require("../../../assets/images/visa.png")}
          resizeMode="contain"
          style={styles.payment}
          accessibilityIgnoresInvertColors={false}
          accessibilityElementsHidden
          importantForAccessibility="no-hide-descendants"
        />
        <Image
          source={require("../../../assets/images/mastercard.png")}
          resizeMode="contain"
          style={styles.payment}
          accessibilityIgnoresInvertColors={false}
          accessibilityElementsHidden
          importantForAccessibility="no-hide-descendants"
        />
        <Image
          source={require("../../../assets/images/aexpress.png")}
          resizeMode="contain"
          style={styles.payment}
          accessibilityIgnoresInvertColors={false}
          accessibilityElementsHidden
          importantForAccessibility="no-hide-descendants"
        />
        <Image
          source={require("../../../assets/images/paypal.png")}
          resizeMode="contain"
          style={styles.payment}
          accessibilityIgnoresInvertColors={false}
          accessibilityElementsHidden
          importantForAccessibility="no-hide-descendants"
        />
        <Image
          source={require("../../../assets/images/applepay.png")}
          resizeMode="contain"
          style={styles.payment}
          accessibilityIgnoresInvertColors={false}
          accessibilityElementsHidden
          importantForAccessibility="no-hide-descendants"
        />
        <Image
          source={require("../../../assets/images/googlepay.png")}
          resizeMode="contain"
          style={styles.payment}
          accessibilityIgnoresInvertColors={false}
          accessibilityElementsHidden
          importantForAccessibility="no-hide-descendants"
        />
      </HStack>
    </VStack>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderTopColor: "black",
    padding: 16,
  },
  total: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  vat: {
    fontSize: 10,
  },
  checkout: {
    width: "100%",
    height: 48,
  },
  payment: {
    height: 25,
    width: 40,
  },
});
