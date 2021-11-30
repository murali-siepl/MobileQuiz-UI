import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Heading = (props) => {
  return (
    <Text style={{ ...styles.message, ...props.style }}>{props.children}</Text>
  );
};

export default Heading;

const styles = StyleSheet.create({
  message: {
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 25,
    fontSize: 21,
  },
});
