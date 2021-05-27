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

interface SpacerProps {
  top?: number;
  bottom?: number;
}

export const Spacer = styled(Divider)<SpacerProps>`
  /* background-color: black; */
  margin-right: 16px;
  margin-top: ${props => (props.top ? String(props.top + "px") : "8px")};
  margin-bottom: ${props =>
    props.bottom ? String(props.bottom + "px") : "8px"};
`;

export const ProductView = styled.View`
  width: 180px;
  margin-right: 8px;
`;

export const ProductImage = styled.Image`
  width: 180px;
  height: 250px;
`;

export const SaleBadge = styled.View`
  position: absolute;
  z-index: 1;
  background-color: red;
  color: white;
  margin-top: 222px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 2px;
  padding-bottom: 2px;
`;

export const ProductImageCover = styled.Image`
  width: 100%;
  height: 100%;
`;

export const ProductDetailsContainer = styled.View`
  padding: 16px;
`;
