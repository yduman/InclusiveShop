import React from "react";
import { PixelRatio, Platform } from "react-native";
import { Appbar } from "react-native-paper";

interface Props {
  title: string;
  subtitle?: string;
  accessibilityLabel?: string;
  accessibilityHint?: string;
}

export default function Header({
  title,
  subtitle,
  accessibilityLabel,
  accessibilityHint,
}: Props) {
  return (
    <Appbar.Header>
      <Appbar.Content
        title={title}
        subtitle={subtitle}
        accessibilityLabel={accessibilityLabel}
        accessibilityHint={accessibilityHint}
        accessibilityRole="header"
        titleStyle={{
          fontSize:
            PixelRatio.getFontScale() >= 2
              ? PixelRatio.getPixelSizeForLayoutSize(5)
              : Platform.OS === "ios"
              ? 17
              : 20,
        }}
      />
    </Appbar.Header>
  );
}
