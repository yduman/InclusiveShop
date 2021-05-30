import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Container } from "../styled";

interface Props {
  children?: React.ReactNode;
  insetBottom?: boolean;
}

export default function PageContainer({ children, insetBottom }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <Container insetBottom={insetBottom} insets={insets}>
      {children}
    </Container>
  );
}
