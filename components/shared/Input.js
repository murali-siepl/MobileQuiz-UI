import React, { useRef } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Colors from "./../../constants/Color";
import { ErrorMessage } from "./ErrorModal";

const Input = (props) => {
  const textInputReference = useRef(null);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        ref={textInputReference}
        {...props}
        style={{
          ...styles.input,
          borderColor: textInputReference.current?.isFocused()
            ? Colors.green
            : "#1B222A",
        }}
        placeholder={props.holder}
        placeholderTextColor="#999999"
      />

      {props.error && props.touched && (
        <ErrorMessage style={{ marginLeft: 5 }} error={props.error} />
      )}
    </View>
  );
};

export default Input;

export const DateInput = (props) => {
  const { value } = props;
  return (
    <View style={{ ...styles.container, marginBottom: 0 }}>
      <Text style={styles.label}>{props.label}</Text>
      <Text
        style={{
          ...styles.input,
          paddingVertical: 16,
        }}
        onPress={props.onPress}
      >
        {value ? value : "Date of Birth"}
      </Text>

      {props.error && props.touched && (
        <ErrorMessage style={{ marginLeft: 10 }} error={props.error} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    overflow: "hidden",
    marginBottom: 15,
    overflow: "hidden",
    width: "90%",
  },
  input: {
    borderColor: "#1B222A",
    borderWidth: 1,
    width: "100%",
    fontSize: 12,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#151B21",
    borderRadius: 10,
    color: "#999999",
    marginBottom: 5,
  },
  label: {
    color: "#BBBBBB",
    fontWeight: "600",
    marginBottom: 7,
    fontWeight: "700",
  },
});
