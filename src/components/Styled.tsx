import styled from "styled-components/native";
import { FAB, Divider, IconButton } from "react-native-paper";

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

export const Spacer = styled(Divider)`
  margin-top: 16px;
  margin-bottom: 8px;
`;

export const ProductView = styled.View`
  width: 180px;
  margin-right: 8px;
`;

export const ProductImage = styled.Image`
  width: 180px;
  height: 250px;
`;

export const ProductLikeButton = styled(IconButton)`
  position: absolute;
  z-index: 1;
  background-color: white;
  margin-left: 144px;
`;

export const SaleBadge = styled.View`
  position: absolute;
  z-index: 1;
  background-color: red;
  color: white;
  margin-top: 220px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 2px;
  padding-bottom: 2px;
`;