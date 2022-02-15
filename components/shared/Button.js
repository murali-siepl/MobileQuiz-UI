import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Color from "../../constants/Color";

const CustomButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={0.6}
      style={{
        width: props.touchWidth ? props.touchWidth : "80%",
        alignItems: "center",
        marginHorizontal: props.mh,
        marginVertical: props.mv,
      }}
    >
      <View style={{ ...styles.container, ...props.style }}>
        <Text style={{ ...styles.button, ...props.button }}>
          {props.children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 13,
    paddingHorizontal: 30,
    backgroundColor: Color.green,
    borderRadius: 15,
    alignItems: "center",
  },
  button: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
});
