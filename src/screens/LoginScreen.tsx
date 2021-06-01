import React, { useEffect, useState } from "react";
import { AccessibilityInfo } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Input from "../components/common/Input";
import { AppLogo, LoginContainer, LoginButton } from "../components/styled";
import useProductStore from "../hooks/useProductStore";
import { StackScreens } from "../types/routerTypes";

export default function LoginScreen() {
  const [isScreenReaderEnabled, setIsScreenReaderEnabled] = useState(false);
  const navigation = useNavigation();
  const store = useProductStore();

  useEffect(() => {
    AccessibilityInfo.isScreenReaderEnabled().then(isEnabled =>
      setIsScreenReaderEnabled(isEnabled),
    );
  }, []);

  const resetStateAndNavigateToShop = () => {
    store.resetState();
    navigation.navigate(StackScreens.Shop);
  };

  return (
    <LoginContainer>
      <AppLogo source={require("../../assets/images/applogo.png")} />
      <Input
        label={isScreenReaderEnabled ? "" : "E-Mail"}
        inputType="email"
        accessibilityLabel="E-Mail input"
        accessibilityHint="Provide your E-Mail"
      />
      <Input
        label={isScreenReaderEnabled ? "" : "Password"}
        inputType="password"
        accessibilityLabel="Password input"
        accessibilityHint="Provide your password"
      />
      <LoginButton
        icon="login"
        label="Login"
        onPress={resetStateAndNavigateToShop}
      />
    </LoginContainer>
  );
}
