import React from "react";
import { StyleSheet, TextInput } from "react-native";
import {} from "react-native-gesture-handler";

const Input = (props) => {
  return (
    <TextInput
      style={{ ...styles.input, ...props.style }}
      placeholder={props.holder}
      onChangeText={() => {}}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    width: "80%",
    backgroundColor: "white",
    paddingVertical: 8,
    paddingHorizontal: 20,
    fontSize: 17,
    marginBottom: 15,
    borderRadius: 5,
    shadowColor: "black",
    elevation: 2,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
  },
});
