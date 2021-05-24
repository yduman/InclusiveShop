import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import HomeScreen from "./HomeScreen";
import SearchScreen from "./SearchScreen";
import FavoriteProductsScreen from "./FavoriteProductsScreen";
import CheckoutScreen from "./CheckoutScreen";

const Tab = createMaterialBottomTabNavigator();

function renderIcon(activeIcon: string, focused: boolean) {
  const iconSize = 20;
  return focused ? <Icon name={activeIcon} size={iconSize} /> : <Icon name={activeIcon + "-outline"} size={iconSize} />;
}

export default function InclusiveShopScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarAccessibilityLabel: "Home",
          tabBarIcon: ({ focused }) => renderIcon("home", focused),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarAccessibilityLabel: "Search Products",
          tabBarIcon: ({ focused }) => renderIcon("text-box-search", focused),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoriteProductsScreen}
        options={{
          tabBarAccessibilityLabel: "Favorite Products",
          tabBarIcon: ({ focused }) => renderIcon("heart", focused),
        }}
      />
      <Tab.Screen
        name="Checkout"
        component={CheckoutScreen}
        options={{
          tabBarAccessibilityLabel: "Checkout",
          tabBarIcon: ({ focused }) => renderIcon("cart", focused),
        }}
      />
    </Tab.Navigator>
  );
}
