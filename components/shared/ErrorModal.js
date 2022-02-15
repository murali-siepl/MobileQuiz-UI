import React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";

const ErrorModal = (error) => {
  Alert.alert("An Error Occured", error.message, [
    { text: "ok", style: "cancel" },
  ]);
};

export default ErrorModal;

export const ErrorMessage = ({ error, style }) => {
  return (
    <View style={{ ...styles.error, ...style }}>
      <Text style={styles.message}>{error}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  error: {
    width: "75%",
    marginVertical: 2,
  },
  message: {
    color: "red",
    fontSize: 12,
    marginVertical: 3,
  },
});
