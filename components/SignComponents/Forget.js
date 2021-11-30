import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Heading from "./../shared/Heading";
import { globalStyles } from "./../../constants/GlobalStyles";
import Input from "./../shared/Input";
import CustomButton from "../shared/Button";

const Forget = (props) => {
  return (
    <View style={globalStyles.container}>
      <Heading
        style={{
          marginTop: 0,
          marginBottom: 0,
        }}
      >
        We need to verify your identity
      </Heading>
      <Image
        style={styles.image}
        source={require("../../assets/images/forget.png")}
      />
      <Text style={styles.text}>
        How would you like to get your security code ?
      </Text>
      <Input
        style={{
          marginTop: 50,
          width: "90%",
          fontSize: 16,
          paddingHorizontal: 8,
        }}
        holder="Enter your phone number or recovery email"
      />
      <CustomButton
        style={{ marginTop: 10 }}
        touchWidth="90%"
        onPress={() => {
          props.navigation.navigate("Reset");
        }}
      >
        next
      </CustomButton>
    </View>
  );
};

export default Forget;

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
  },
  text: {
    width: "80%",
    textAlign: "center",
    lineHeight: 25,
    fontSize: 17,
  },
});
