import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Color from "../../constants/Color";

const CustomButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={0.6}
      disabled={props.disabled}
      style={{
        width: props.touchWidth ? props.touchWidth : "80%",
        alignItems: "center",
        marginHorizontal: props.mh,
        marginVertical: props.mv,
      }}
    >
      <View
        style={{
          ...styles.container,
          backgroundColor: props.disabled ? Color.textColor : Color.darkGreen,
          ...props.style,
        }}
      >
        <Text
          style={{
            ...styles.button,
            ...props.button,
            color: props.disabled ? Color.borderColor : "black",
          }}
        >
          {props.children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

export const BackToHome = (props) => (
  <TouchableOpacity
    onPress={() => {
      if (props.next) {
        props.onPress();
      } else {
        props.navigation.navigate("Dashboard");
      }
    }}
    activeOpacity={0.6}
    style={{
      width: "100%",
      alignItems: "center",
      marginHorizontal: props.mh,
      marginVertical: props.mv,
    }}
  >
    <View
      style={{
        ...styles.container,
        ...props.style,
        paddingHorizontal: 10,
        marginTop: 14,
        backgroundColor: "transparent",
        borderColor: "#50C700",
        borderWidth: 1,
      }}
    >
      <Text
        style={{
          ...styles.button,
          ...props.button,
          color: "#50C700",
          fontWeight: "400",
        }}
      >
        {props.next ? (
          <>
            {props.back ? "Back  " : "Next  "}
            <Image
              source={require("../../assets/images/Common/rightArrow.png")}
              style={{ width: 12, height: 12 }}
            />
          </>
        ) : (
          <>
            <Image
              source={require("../../assets/images/Common/leftArrow.png")}
              style={{ width: 14, height: 14 }}
            />
            {" Back To Home"}
          </>
        )}
      </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 13,
    paddingHorizontal: 30,
    backgroundColor: Color.darkGreen,
    borderRadius: 5,
    alignItems: "center",
  },
  button: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
});
