import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Option = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{ ...styles.option, ...props.style }}
      activeOpacity={0.3}
    >
      <Text style={styles.text}>{props.children}</Text>
    </TouchableOpacity>
  );
};

export default Option;

const styles = StyleSheet.create({
  option: {
    width: "90%",
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    color: "white",
    flexDirection: "row",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
  },
});
