import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import HomeScreen from "./HomeScreen";
import SearchScreen from "./SearchScreen";
import FavoriteProductsScreen from "./FavoriteProductsScreen";
import ShoppingCartScreen from "./ShoppingCartScreen";

const Tab = createMaterialTopTabNavigator();

function renderIcon(activeIcon: string, focused: boolean) {
  const iconSize = 20;
  return focused ? (
    <Icon name={activeIcon} size={iconSize} />
  ) : (
    <Icon name={activeIcon + "-outline"} size={iconSize} />
  );
}

export default function InclusiveShopScreen() {
  const insets = useSafeAreaInsets();

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showIcon: true,
          showLabel: false,
          style: { marginTop: insets.top },
        }}>
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
          name="FavoriteProducts"
          component={FavoriteProductsScreen}
          options={{
            tabBarAccessibilityLabel: "Favorite Products",
            tabBarIcon: ({ focused }) => renderIcon("heart", focused),
          }}
        />
        <Tab.Screen
          name="ShoppingCart"
          component={ShoppingCartScreen}
          options={{
            tabBarAccessibilityLabel: "Shopping Cart",
            tabBarIcon: ({ focused }) => renderIcon("cart", focused),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
