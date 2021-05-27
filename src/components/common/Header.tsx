import React from "react";
import { Appbar } from "react-native-paper";

interface Props {
  title: string;
  subtitle?: string;
}

export default function Header(props: Props) {
  return (
    <Appbar.Header>
      <Appbar.Content title={props.title} subtitle={props.subtitle} />
    </Appbar.Header>
  );
}
