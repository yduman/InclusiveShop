import styled from "styled-components/native";
import { FAB } from "react-native-paper";

export const LoginContainer = styled.View`
  flex: 1;
  justify-content: center;
  padding: 16px;
`;

export const AppLogo = styled.Image`
  width: 150px;
  height: 150px;
  align-self: center;
  margin-bottom: 40px;
`;

export const LoginButton = styled(FAB)`
  width: 70%;
  align-self: center;
`;
