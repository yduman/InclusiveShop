import React from "react";
import { Image, ImageSourcePropType, StyleSheet } from "react-native";

import Headlines from "./Headlines";

interface Props {
  title: string;
  subtitle: string;
  img: ImageSourcePropType;
}

export default function FallbackContent(props: Props) {
  const { title, subtitle, img } = props;
  return (
    <React.Fragment>
      <Headlines title={title} subtitle={subtitle} />
      <Image source={img} resizeMode="cover" style={styles.img} />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  img: {
    maxWidth: "100%",
    maxHeight: "50%",
  },
});
