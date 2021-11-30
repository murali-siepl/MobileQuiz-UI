import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CustomButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={0.6}
      style={{
        width: props.touchWidth ? props.touchWidth : "80%",
        alignItems: "center",
        marginHorizontal: props.mh,
      }}
    >
      <View style={{ ...styles.container, ...props.style }}>
        <Text style={styles.button}>{props.children}</Text>
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
    backgroundColor: "#69DADB",
    borderRadius: 5,
    alignItems: "center",
  },
  button: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
