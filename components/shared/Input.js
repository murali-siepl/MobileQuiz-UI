import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const Input = (props) => {
  return (
    <View
      style={{
        ...styles.container,
        ...{
          width: props.setWidth ? props.setWidth : "80%",
        },
      }}
    >
      <TextInput
        {...props}
        style={{
          ...styles.input,
          ...props.style,
        }}
        placeholder={props.holder}
      />
    </View>
  );
};

export default Input;

export const DateInput = (props) => {
  const { value } = props;
  return (
    <View
      style={{
        ...styles.container,
        ...{
          width: props.setWidth ? props.setWidth : "80%",
        },
      }}
    >
      <Text
        style={{
          ...styles.input,
          color: value ? "black" : "gray",
          paddingVertical: 10,
        }}
        onPress={props.onPress}
      >
        {value ? value : "Date of Birth"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    marginBottom: 10,
    overflow: "hidden",
    shadowColor: "black",
    elevation: 10,
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 1,
  },
  input: {
    width: "100%",
    backgroundColor: "white",
    paddingVertical: 8,
    paddingHorizontal: 20,
    fontSize: 17,
  },
});
