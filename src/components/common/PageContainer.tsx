/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props {
  children?: React.ReactNode;
  withInset?: boolean;
}

export default function PageContainer({ children, withInset }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        padding: 16,
        height: "100%",
        paddingBottom: withInset ? insets.bottom * 3 : 0,
      }}>
      {children}
    </View>
  );
}
