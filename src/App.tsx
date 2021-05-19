import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import InclusiveShop from "./screens/InclusiveShopScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <InclusiveShop />
    </SafeAreaProvider>
  );
}
