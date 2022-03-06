import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  View,
} from "react-native";
import CustomButton from "../../components/shared/Button";
import Heading from "../../components/shared/Heading";
import Colors from "./../../constants/Color";
import { Ionicons } from "@expo/vector-icons";
const StartScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <ImageBackground
        source={require("../../assets/images/spiral.png")}
        style={styles.background}
      >
        <Image
          source={require("../../assets/images/logo1.png")}
          style={styles.logo}
        />

        <Heading
          style={{
            marginTop: 20,
            width: "60%",
            textAlign: "center",
            lineHeight: 35,
          }}
        >
          Test Your Knowledge On The Go
        </Heading>

        <CustomButton
          onPress={() => {
            navigation.navigate("Slides");
          }}
          style={{ marginTop: 40, backgroundColor: Colors.green }}
          touchWidth="45%"
        >
          Get Started
        </CustomButton>
        <View style={styles.conditions}>
          <View style={styles.checkbox}>
            <Ionicons name="checkbox" size={24} color={Colors.green} />
            <Text style={styles.read}>I have read and acknowledge </Text>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                navigation.navigate("PrivacyPolicy");
              }}
            >
              <Text style={styles.privacyText}>PRIVACY POLICY</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.checkbox}>
            <Ionicons name="checkbox" size={24} color={Colors.green} />
            <Text style={styles.read}>I have read and agree </Text>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                navigation.navigate("TermsOfService");
              }}
            >
              <Text style={styles.privacyText}>TERMS OF SERVICE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    flex: 1,
    height: 100,
  },
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    borderRadius: 20,
    width: 200,
    height: 200,
    marginBottom: -60,
  },

  read: {
    color: Colors.green,
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
  conditions: {
    marginVertical: 20,
  },
  checkbox: {
    flexDirection: "row",
    alignItems: "center",

    marginVertical: 5,
  },
  privacyText: {
    color: Colors.orange,
  },
});
