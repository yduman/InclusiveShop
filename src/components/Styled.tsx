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
  background-color: transparent;
  margin-top: ${props => (props.top ? String(props.top + "px") : "8px")};
  margin-bottom: ${props => (props.bottom ? String(props.bottom + "px") : "8px")};
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
  /* margin-left: 133px; */
  align-self: flex-end;
  top: 31%;
  width: 48px;
  height: 48px;
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
  max-width: 100%;
  max-height: 74%;
`;

export const ProductDetailsContainer = styled.View`
  padding: 16px;
`;
