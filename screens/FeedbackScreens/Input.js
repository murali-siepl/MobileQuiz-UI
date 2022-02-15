import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { ErrorMessage } from "../../components/shared/ErrorModal";

const Input = (props) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} {...props} />
      {props.error && props.touched && (
        <ErrorMessage style={{ marginLeft: 10 }} error={props.error} />
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 10,
  },
  input: {
    borderBottomColor: "gray",
    borderBottomWidth: 2,
    width: "100%",
    fontSize: 18,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});
