import React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

export default function Input(props: InputProps) {
  const [text, setText] = React.useState("");

  return (
    <TextInput
      style={styles.input}
      mode="outlined"
      label={props.label}
      value={text}
      autoCompleteType={props.inputType}
      keyboardType={getKeyboardType(props.inputType)}
      textContentType={getTextContentType(props.inputType)}
      secureTextEntry={props.inputType === "password"}
      onChangeText={t => setText(t)}
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

interface InputProps {
  label: string;
  inputType: InputType;
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
  },
});
