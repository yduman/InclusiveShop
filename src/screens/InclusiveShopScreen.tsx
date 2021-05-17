import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import FavoriteProductsScreen from './FavoriteProductsScreen';
import ShoppingCartScreen from './ShoppingCartScreen';

const Tab = createMaterialTopTabNavigator();

export default function InclusiveShopScreen() {
  const insets = useSafeAreaInsets();

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          style: { marginTop: insets.top },
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen
          name="FavoriteProducts"
          component={FavoriteProductsScreen}
        />
        <Tab.Screen name="ShoppingCart" component={ShoppingCartScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
