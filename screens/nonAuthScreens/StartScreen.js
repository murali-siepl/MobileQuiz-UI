import React, { useState } from "react";
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
import { CheckBox } from "react-native-elements";

const StartScreen = ({ navigation }) => {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  return (
    <View style={styles.screen}>
      <ImageBackground
        source={require("../../assets/images/spiral.png")}
        style={styles.background}
      >
        <Image
          source={require("../../assets/images/Common/logo.png")}
          style={styles.logo}
        />

        <Heading
          style={{
            width: "60%",
            textAlign: "center",
            lineHeight: 30,
            fontWeight: "500",
          }}
        >
          Test Your Knowledge On The Go
        </Heading>

        <CustomButton
          onPress={() => {
            navigation.navigate("Slides");
          }}
          style={{ marginTop: 40 }}
          touchWidth="45%"
          disabled={!(check1 && check2)}
        >
          Get Started
        </CustomButton>
        <View style={styles.conditions}>
          <View style={styles.checkbox}>
            {/* <Ionicons name="checkbox" size={24} color={Colors.green} />
             */}
            <CheckBox
              containerStyle={{ margin: 0, padding: 0 }}
              center
              title=""
              checked={check1}
              onPress={() => setCheck1(!check1)}
              size={24}
              checkedColor={Colors.green}
            />
            <Text style={styles.read}>{"I have read and acknowledge "} </Text>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                navigation.navigate("PrivacyPolicy", {
                  setCheck1: setCheck1,
                  check1: check1,
                });
              }}
            >
              <Text style={styles.privacyText}>PRIVACY POLICY</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.checkbox}>
            <CheckBox
              containerStyle={{ margin: 0, padding: 0 }}
              wrapperStyle={{ margin: 0, padding: 0 }}
              center
              title=""
              checked={check2}
              onPress={() => setCheck2(!check2)}
              size={24}
              checkedColor={Colors.green}
            />
            <Text style={styles.read}>{"I have read and agree"} </Text>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                navigation.navigate("TermsOfService", {
                  setCheck2: setCheck2,
                  check2: check2,
                });
              }}
            >
              <Text style={styles.privacyText}>{" TERMS OF SERVICE"}</Text>
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
  },
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 130,
    height: 130,
  },
  conditions: {
    marginVertical: 20,
  },
  read: {
    color: Colors.green,
    fontSize: 12,
  },
  quiz: {
    color: "rgba(0, 0, 0, 0.66)",
    fontSize: 30,
    textAlign: "center",
    fontFamily: "roboto-bold",
    marginVertical: 15,
  },

  checkbox: {
    flexDirection: "row",
    marginVertical: 10,
  },
  privacyText: {
    color: Colors.orange,
    fontSize: 12,
  },
});
