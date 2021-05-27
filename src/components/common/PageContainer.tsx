import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props {
  children?: React.ReactNode;
  insetBottom?: boolean;
}

export default function PageContainer({ children, insetBottom }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        padding: 16,
        marginBottom: insetBottom ? insets.bottom * 3 : 0,
      }}>
      {children}
    </View>
  );
}
