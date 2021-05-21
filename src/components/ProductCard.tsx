import React from "react";
import { StyleSheet, ImageSourcePropType } from "react-native";
import { Card } from "react-native-paper";

interface ProductCardProps {
  title: string;
  imgSrc: ImageSourcePropType;
  content?: string;
  subtitle?: string;
}

export default function ProductCard(props: ProductCardProps) {
  return (
    <Card style={styles.card}>
      <Card.Cover
        style={styles.cardImg}
        source={props.imgSrc}
        resizeMode="stretch"
      />
      <Card.Title title={props.title} subtitle={props.subtitle} />
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 210,
    marginRight: 16,
  },
  cardImg: {
    height: 300,
  },
});
