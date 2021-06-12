import styled from "styled-components/native";
import { FAB, Divider } from "react-native-paper";
import { EdgeInsets } from "react-native-safe-area-context";

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

interface SaleBadgeProps {
  pixelRatio: number;
}

export const SaleBadge = styled.View<SaleBadgeProps>`
  position: absolute;
  z-index: 1;
  background-color: #b71c1c;
  color: white;
  margin-top: ${props => String(220 - props.pixelRatio) + "px"};
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

interface GenderButtonProps {
  isActive: boolean;
}

export const GenderButton = styled.TouchableOpacity<GenderButtonProps>`
  padding: 16px;
  flex: 1;
  border-bottom-width: ${props => (props.isActive ? "2px" : "0px")};
  border-bottom-color: black;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
`;

export const CenterText = styled.Text`
  text-align: center;
`;

interface ContainerProps {
  insets: EdgeInsets;
  insetBottom?: boolean;
}

export const Container = styled.View<ContainerProps>`
  padding: 16px;
  height: 100%;
  margin-bottom: ${props =>
    props.insetBottom ? String(props.insets.bottom * 5 + "px") : "0px"};
`;

export const CheckoutCardContainer = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: lightgrey;
`;
