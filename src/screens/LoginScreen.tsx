import React from "react";
import { useNavigation } from "@react-navigation/native";

import { AppLogo, LoginContainer, LoginButton } from "../components/Styled";
import Input from "../components/Input";

export default function LoginScreen() {
  const navigation = useNavigation();

  return (
    <LoginContainer>
      <AppLogo source={require("../../assets/applogo.png")} />
      <Input label="E-Mail" inputType="email" />
      <Input label="Password" inputType="password" />
      <LoginButton
        icon="login"
        label="Login"
        onPress={() => navigation.navigate("Shop")}
      />
    </LoginContainer>
  );
}
