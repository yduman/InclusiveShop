import React from "react";
import { Text, StyleSheet, Image } from "react-native";
import { VStack, HStack } from "native-base";
import { Button, useTheme } from "react-native-paper";

export default function CheckoutNotice() {
  const { colors } = useTheme();

  return (
    <VStack style={styles.container} space={4}>
      <HStack justifyContent="space-between">
        <Text style={styles.total}>Total</Text>
        <Text style={styles.total}>$75</Text>
      </HStack>
      <Button
        onPress={() => console.log("checkout")}
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
