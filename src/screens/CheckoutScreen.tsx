import React from "react";
import { View, StyleSheet } from "react-native";

import Header from "../components/common/Header";
import FallbackContent from "../components/common/FallbackContent";
import useProductStore from "../hooks/useProductStore";
import CheckoutList from "../components/CheckoutList";
import ShippingNotice from "../components/ShippingNotice";
import CheckoutNotice from "../components/CheckoutNotice";

export default function CheckoutScreen() {
  const store = useProductStore();

  return (
    <React.Fragment>
      <Header title="Checkout" />
      {store.cart.length === 0 ? (
        <FallbackContent
          title="Nothing you liked?"
          subtitle="Your shopping cart is empty."
          img={require("../../assets/images/emptycart.png")}
        />
      ) : (
        <View style={styles.screen}>
          <ShippingNotice />
          <CheckoutList data={store.cart} />
          <CheckoutNotice />
        </View>
      )}
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "space-between",
  },
});
