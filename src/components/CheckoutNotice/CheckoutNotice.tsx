import React from "react";
import { Text, StyleSheet, Image, Alert } from "react-native";
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

export default function CheckoutNotice() {
  const { colors } = useTheme();
  const store = useProductStore();
  const emptyCart = useProductStore(state => state.emptyCart);
  const totalPrice = calculateTotalPrice(store.cart);
  const navigation = useNavigation();

  return (
    <VStack style={styles.container} space={4}>
      <HStack justifyContent="space-between">
        <Text style={styles.total}>Total</Text>
        <Text style={styles.total}>{totalPrice}</Text>
      </HStack>
      <Button
        onPress={() => checkoutAlert(emptyCart, navigation)}
        mode="contained"
        color={colors.accent}
        style={styles.checkout}>
        Checkout
      </Button>
      <HStack space={5} justifyContent="center">
        <Image
          source={require("../../../assets/images/visa.png")}
          resizeMode="contain"
          style={styles.payment}
          accessibilityIgnoresInvertColors
        />
        <Image
          source={require("../../../assets/images/mastercard.png")}
          resizeMode="contain"
          style={styles.payment}
          accessibilityIgnoresInvertColors
        />
        <Image
          source={require("../../../assets/images/aexpress.png")}
          resizeMode="contain"
          style={styles.payment}
          accessibilityIgnoresInvertColors
        />
        <Image
          source={require("../../../assets/images/paypal.png")}
          resizeMode="contain"
          style={styles.payment}
          accessibilityIgnoresInvertColors
        />
        <Image
          source={require("../../../assets/images/applepay.png")}
          resizeMode="contain"
          style={styles.payment}
          accessibilityIgnoresInvertColors
        />
        <Image
          source={require("../../../assets/images/googlepay.png")}
          resizeMode="contain"
          style={styles.payment}
          accessibilityIgnoresInvertColors
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
  },
  payment: {
    height: 25,
    width: 40,
  },
});
