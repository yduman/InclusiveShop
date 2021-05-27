import React from "react";
import { Title, Subheading, Headline } from "react-native-paper";

interface HeadlinesProps {
  title: string;
  subtitle?: string;
}

export default function Headlines(props: HeadlinesProps) {
  return (
    <React.Fragment>
      <Headline>{props.title}</Headline>
      <Subheading>{props.subtitle}</Subheading>
    </React.Fragment>
  );
}
