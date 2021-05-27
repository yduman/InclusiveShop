import React from "react";
import merge from "deepmerge";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme as NavigationDefaultTheme } from "@react-navigation/native";
import { configureFonts, DefaultTheme as PaperDefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { NativeBaseProvider } from "native-base";

import LoginScreen from "./screens/LoginScreen";
import InclusiveShopScreen from "./screens/InclusiveShopScreen";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import ProductDetailNavBar from "./components/navbars/ProductDetailNavBar";
import { fontConfig } from "../utils/theme";

const Stack = createStackNavigator();
const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const fonts = fontConfig;
const theme = {
  ...CombinedDefaultTheme,
  colors: {
    ...CombinedDefaultTheme.colors,
    primary: "#EAE7DC",
    accent: "#0F0F0F",
    background: "#FFFFFF",
  },
  fonts: configureFonts(fonts),
};

export default function Main() {
  return (
    <NativeBaseProvider>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
            <Stack.Screen options={{ headerShown: false }} name="Shop" component={InclusiveShopScreen} />
            <Stack.Screen
              options={{ header: props => <ProductDetailNavBar {...props} /> }}
              name="ProductDetailScreen"
              component={ProductDetailScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </NativeBaseProvider>
  );
}
