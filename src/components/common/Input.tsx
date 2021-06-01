import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

interface Props {
  label: string;
  inputType: InputType;
  accessibilityLabel: string;
  accessibilityHint: string;
}

export default function Input({
  label,
  inputType,
  accessibilityLabel,
  accessibilityHint,
}: Props) {
  const [text, setText] = useState("");

  return (
    <TextInput
      theme={{
        colors: {
          primary: "black",
          placeholder: "black",
        },
      }}
      style={styles.input}
      mode="outlined"
      label={label}
      value={text}
      autoCompleteType={inputType}
      keyboardType={getKeyboardType(inputType)}
      textContentType={getTextContentType(inputType)}
      secureTextEntry={inputType === "password"}
      onChangeText={t => setText(t)}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
    />
  );
}

function getKeyboardType(inputType: InputType) {
  switch (inputType) {
    case "email":
      return "email-address";
    default:
      return "default";
  }
}

function getTextContentType(inputType: InputType) {
  switch (inputType) {
    case "email":
      return "emailAddress";
    case "password":
      return "password";
    default:
      return "none";
  }
}

type InputType = "email" | "password";

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
  },
});
