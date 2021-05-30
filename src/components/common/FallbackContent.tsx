import React from "react";
import { View, Image, ImageSourcePropType, StyleSheet } from "react-native";

import Headlines from "./Headlines";

interface Props {
  title: string;
  subtitle: string;
  img: ImageSourcePropType;
}

export default function FallbackContent({ title, subtitle, img }: Props) {
  return (
    <View style={styles.view}>
      <Headlines title={title} subtitle={subtitle} />
      <Image
        source={img}
        resizeMode="cover"
        style={styles.img}
        accessibilityIgnoresInvertColors
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    padding: 16,
  },
  img: {
    maxWidth: "100%",
    maxHeight: "50%",
  },
});
