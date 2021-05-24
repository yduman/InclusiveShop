import React from "react";
import { StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";

interface Props {
  isFavorite: boolean;
  onPress: () => void;
}

export default function ProductLikeButton(props: Props) {
  const { isFavorite, onPress } = props;
  return <IconButton style={styles.button} size={20} icon={isFavorite ? "heart" : "heart-outline"} onPress={onPress} />;
}

const styles = StyleSheet.create({
  button: {
    borderColor: "black",
  },
});
