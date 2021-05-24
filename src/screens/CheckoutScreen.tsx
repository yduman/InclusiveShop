import React from "react";
import { View } from "react-native";

import Header from "../components/Header";
import EmptyPage from "../components/EmptyPage";
import ProductList from "../components/ProductList";
import useProductStore from "../../utils/useProductStore";

export default function CheckoutScreen() {
  const shoppingCart = useProductStore(state => state.cart);

  return (
    <React.Fragment>
      <Header title="Checkout" />
      <View
        style={{
          paddingTop: 16,
          paddingLeft: 16,
          height: "100%",
        }}>
        {shoppingCart.length === 0 ? (
          <EmptyPage
            title="Nothing you liked?"
            subtitle="Your shopping cart is empty."
            img={require("../../assets/images/emptycart.png")}
          />
        ) : (
          <ProductList data={shoppingCart} isHorizontal={false} columns={2} />
        )}
      </View>
    </React.Fragment>
  );
}
