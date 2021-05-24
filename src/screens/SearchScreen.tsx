import React from "react";
import { View, Text } from "react-native";
import Header from "../components/Header";

export default function SearchScreen() {
  return (
    <React.Fragment>
      <Header title="Search" />
      <View
        style={{
          paddingTop: 16,
          paddingLeft: 16,
          height: "100%",
        }}>
        <Text>Search Screen</Text>
      </View>
    </React.Fragment>
  );
}
