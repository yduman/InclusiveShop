import React from "react";
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
      />
    </Appbar.Header>
  );
}
