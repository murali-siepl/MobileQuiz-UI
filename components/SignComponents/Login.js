import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Input from "./../shared/Input";
import CustomButton from "./../shared/Button";
import Colors from "../../constants/Color";

const Login = (props) => {
  return (
    <View style={styles.contaier}>
      <Input holder="Enter your full name" />
      <Input holder="Enter your email" />
      <Text
        style={styles.forget}
        onPress={() => {
          props.data.navigation.navigate("Forgot");
        }}
      >
        Forgot password
      </Text>
      <CustomButton
        style={{ marginVertical: 30, marginBottom: 50 }}
        touchWidth="80%"
        onPress={() => {
          props.data.navigation.navigate("DrawerStack");
        }}
      >
        Login
      </CustomButton>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  contaier: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  forget: { width: "75%", color: Colors.blue, textAlign: "left", fontSize: 18 },
});
