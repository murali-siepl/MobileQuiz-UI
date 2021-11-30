import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Heading from "./../shared/Heading";
import { globalStyles } from "./../../constants/GlobalStyles";
import Input from "./../shared/Input";
import CustomButton from "../shared/Button";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import Colors from "./../../constants/Color";

const Reset = (props) => {
  return (
    <View style={globalStyles.container}>
      <Heading
        style={{
          marginTop: 0,
          marginBottom: 50,
        }}
      >
        Reset your account password
      </Heading>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Please provide this security code which sent to your registered email
          id or phone number
        </Text>
        <Text style={styles.text}>didn't receive the security code ?</Text>
        <Text style={{ ...styles.text, ...styles.resend }}>Resend code</Text>
      </View>

      <Input
        style={{
          width: "90%",
          fontSize: 16,
          paddingHorizontal: 8,
        }}
        holder="Security code"
      />
      <Input
        style={{
          width: "90%",
          fontSize: 16,
          paddingHorizontal: 8,
        }}
        holder="New password"
      />
      <Input
        style={{
          width: "90%",
          fontSize: 16,
          paddingHorizontal: 8,
        }}
        holder="Confirm new password"
      />

      <CustomButton style={{ marginTop: 10 }} touchWidth="90%">
        Submit
      </CustomButton>
    </View>
  );
};

export default Reset;

const styles = StyleSheet.create({
  textContainer: {
    width: "80%",
    marginBottom: 25,
  },
  text: {
    fontSize: 17,
    marginBottom: 5,
    lineHeight: 22,
  },
  resend: {
    color: Colors.blue,
  },
});
