import React from "react";
import { TouchableOpacity, StyleSheet, Image } from "react-native";

const Eye = ({ setShowPass, calendar, showpassword }) => {
  return (
    <TouchableOpacity
      style={styles.icon}
      activeOpacity={0.6}
      onPress={() => {
        setShowPass((prev) => !prev);
      }}
    >
      {!calendar ? (
        showpassword ? (
          <Image source={require("../../assets/images/Common/closeEye.png")} />
        ) : (
          <Image source={require("../../assets/images/Common/openEye.png")} />
        )
      ) : (
        <Image source={require("../../assets/images/Common/calendar.png")} />
      )}
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
