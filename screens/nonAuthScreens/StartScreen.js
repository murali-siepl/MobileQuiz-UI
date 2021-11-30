import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import CustomButton from "../../components/shared/Button";
import Heading from "../../components/shared/Heading";

const StartScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Image
        source={require("../../assets/images/logo6.jpg")}
        style={styles.logo}
      />

      <Heading>Test your knowledge on the go</Heading>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Quiz App is not just for fun, it is an interactive way to learn and
          increase your knowledge.You also get reward for winning the quiz as a
          small token of appreciation from us.
        </Text>
      </View>
      <CustomButton
        onPress={() => {
          navigation.navigate("SignIn");
        }}
        style={{ marginTop: 40 }}
        touchWidth="85%"
      >
        Get Started
      </CustomButton>
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    borderRadius: 20,
  },
  quiz: {
    color: "rgba(0, 0, 0, 0.66)",
    fontSize: 30,
    textAlign: "center",
    fontFamily: "roboto-bold",
    marginVertical: 15,
  },

  textContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    width: "80%",
    textAlign: "left",
    lineHeight: 25,
    fontSize: 17,
  },
});
