import React from "react";
import { useNavigation } from "@react-navigation/native";

import Input from "../components/common/Input";
import { AppLogo, LoginContainer, LoginButton } from "../components/styled";
import useProductStore, { initialState } from "../hooks/useProductStore";
import { StackScreens } from "../types/routerTypes";

export default function LoginScreen() {
  const navigation = useNavigation();
  const store = useProductStore();

  const resetStateAndNavigateToShop = () => {
    store.setShopState(initialState);
    navigation.navigate(StackScreens.Shop);
  };

  return (
    <LoginContainer>
      <AppLogo source={require("../../assets/images/applogo.png")} />
      <Input label="E-Mail" inputType="email" />
      <Input label="Password" inputType="password" />
      <LoginButton
        icon="login"
        label="Login"
        onPress={resetStateAndNavigateToShop}
      />
    </LoginContainer>
  );
}
