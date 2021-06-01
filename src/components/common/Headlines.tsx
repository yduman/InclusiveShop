import React from "react";
import { View } from "react-native";
import { Subheading, Headline } from "react-native-paper";

interface HeadlinesProps {
  title: string;
  subtitle?: string;
  accessibilityLabel?: string;
  accessibilityHint?: string;
}

export default function Headlines({
  title,
  subtitle,
  accessibilityLabel,
  accessibilityHint,
}: HeadlinesProps) {
  return (
    <View
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityRole="header">
      <Headline
        accessibilityElementsHidden
        importantForAccessibility="no-hide-descendants">
        {title}
      </Headline>
      <Subheading
        accessibilityElementsHidden
        importantForAccessibility="no-hide-descendants">
        {subtitle}
      </Subheading>
    </View>
  );
}
