import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Color from "../../constants/Color";

const Heading = (props) => {
  return (
    <Text style={{ ...styles.message, ...props.style }}>{props.children}</Text>
  );
};

export default Heading;

const styles = StyleSheet.create({
  message: {
    fontWeight: "bold",
    fontSize: 21,
    color: Color.green,
  },
});
