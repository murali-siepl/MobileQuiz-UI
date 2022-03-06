import React from "react";
import { TouchableOpacity, StyleSheet, Image } from "react-native";

const Eye = ({ setShowPass }) => {
  return (
    <TouchableOpacity
      style={styles.icon}
      activeOpacity={0.6}
      onPress={() => {
        setShowPass((prev) => !prev);
      }}
    >
      <Image source={require("../../assets/images/SignUp/openEye.png")} />
    </TouchableOpacity>
  );
};

export default Eye;

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    top: 30,
    right: 20,
    padding: 10,
  },
});
