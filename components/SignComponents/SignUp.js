import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Input from "./../shared/Input";
import CustomButton from "./../shared/Button";

const SignUp = (props) => {
  console.log(props.data);
  return (
    <View style={styles.contaier}>
      <Input holder="Enter your full name" />
      <Input holder="Enter your email" />
      <Input holder="Enter your password" />
      <Input holder="Confirm password" />
      <Input holder="Your location" />
      <CustomButton
        touchWidth="80%"
        style={{ marginVertical: 15 }}
        onPress={() => {
          props.data.navigation.navigate("DrawerStack");
        }}
      >
        Register
      </CustomButton>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  contaier: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});
