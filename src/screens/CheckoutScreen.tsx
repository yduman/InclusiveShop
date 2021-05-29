import React from "react";
import { View } from "react-native";

import Header from "../components/common/Header";
import FallbackContent from "../components/common/FallbackContent";
import ProductList from "../components/ProductList";
import useProductStore from "../hooks/useProductStore";

export default function CheckoutScreen() {
  const store = useProductStore();
  const cartItems = store.products.filter(p => store.cart.includes(p.id));

  return (
    <React.Fragment>
      <Header title="Checkout" />
      <View
        style={{
          paddingTop: 16,
          paddingLeft: 16,
          height: "100%",
        }}>
        {store.cart.length === 0 ? (
          <FallbackContent
            title="Nothing you liked?"
            subtitle="Your shopping cart is empty."
            img={require("../../assets/images/emptycart.png")}
          />
        ) : (
          <ProductList data={cartItems} isHorizontal={false} columns={2} />
        )}
      </View>
    </React.Fragment>
  );
}
