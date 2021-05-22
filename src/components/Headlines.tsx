import React from "react";
import { Title, Subheading } from "react-native-paper";

interface HeadlinesProps {
  header: string;
  subHeader: string;
}

export default function Headlines(props: HeadlinesProps) {
  return (
    <React.Fragment>
      <Title>{props.header}</Title>
      <Subheading>{props.subHeader}</Subheading>
    </React.Fragment>
  );
}
