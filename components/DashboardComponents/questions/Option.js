import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Color from "../../../constants/Color";

const Option = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{ ...styles.option, ...props.style }}
      activeOpacity={0.3}
    >
      <Text style={{ ...styles.type, ...props.styleText }}>
        {props.index === 0 && "A."}
        {props.index === 1 && "B."}
        {props.index === 2 && "C."}
        {props.index === 3 && "D."}
      </Text>
      <Text style={{ ...styles.text, ...props.styleText }}>
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};

export default Option;

const styles = StyleSheet.create({
  option: {
    width: "100%",
    borderWidth: 0.4,
    borderColor: Color.darkGreen,
    marginBottom: 10,
    borderRadius: 5,
    paddingVertical: 17,
    paddingHorizontal: 15,
    color: "white",
    flexDirection: "row",
  },
  type: {
    fontSize: 16,
    color: Color.textColor,
    fontWeight: "700",
    marginRight: 30,
  },

  text: {
    fontSize: 16,
    color: Color.textColor,
    fontWeight: "700",
  },
});
