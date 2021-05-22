import React from "react";
import { useNavigation } from "@react-navigation/native";

import { AppLogo, LoginContainer, LoginButton } from "../components/Styled";
import Input from "../components/Input";
import useProductStore, { initialState } from "../../utils/useProductStore";

export default function LoginScreen() {
  const navigation = useNavigation();
  const store = useProductStore();

  const resetStateAndNavigateToShop = () => {
    store.setShopState(initialState);
    navigation.navigate("Shop");
  };

  return (
    <LoginContainer>
      <AppLogo source={require("../../assets/applogo.png")} />
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