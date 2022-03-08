import React from "react";
import {
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Heading from "./../../components/shared/Heading";
import { globalStyles } from "./../../constants/GlobalStyles";

import CustomButton, { BackToHome } from "./../../components/shared/Button";
import Color from "../../constants/Color";
import { useRoute } from "@react-navigation/native";

const PrivacyPolicy = (props) => {
  const { params } = useRoute();
  return (
    <ScrollView contentContainerStyle={{ ...globalStyles.scrollView }}>
      <View style={{ ...globalStyles.container, ...styles.container }}>
        <View style={{ ...styles.first, ...globalStyles.border }}>
          <Heading
            style={{
              color: "white",
              fontSize: 24,
              width: "100%",
              textAlign: "center",
              marginTop: 10,
            }}
          >
            Our Privacy Policy
          </Heading>
          <Heading
            style={{
              color: "white",
              fontSize: 14,
              marginTop: 15,
              marginBottom: 15,
            }}
          >
            Last Updated: November 21,2021
          </Heading>
          <Text
            style={{
              ...globalStyles.text,
              marginBottom: 15,
            }}
          >
            This Privacy Policy describes Our policies and procedures on the
            collection , use and disclosure of Your information w hen You use
            the Service and tells You abou t Your privacy rights and how the law
            protects You.
          </Text>
          <Text style={{ ...globalStyles.text }}>
            We use Your Personal data to provide and improve the Service. By
            using the Service, You agree to the collection and use of
            information i n accordance with this Privacy Policy.
          </Text>
        </View>
        <View style={{ ...styles.first, ...globalStyles.border }}>
          <Heading style={{ color: "white", fontSize: 14 }}>
            Intrepretations And Definitions
          </Heading>
          <Text
            style={{
              ...globalStyles.text,
              marginBottom: 25,
              marginTop: 10,
            }}
          >
            he words of which the initial letter is capitalized have meanings
            defined under the following conditions. The following definitions
            shall have the same meaning regardless of whether they appear in
            singular or in plural.
          </Text>
          <CustomButton
            touchWidth="100%"
            style={{ backgroundColor: "#fb4141" }}
            onPress={() => {
              params.setCheck1(false);
              props.navigation.navigate("Start");
            }}
          >
            I Disagree
          </CustomButton>
          <BackToHome
            onPress={() => {
              props.navigation.navigate("Start");
              params.setCheck1(true);
            }}
            next={true}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.SignBackground,
    padding: 20,
    width: "100%",
    paddingTop: StatusBar.currentHeight,
  },
  first: {
    width: "100%",
    padding: 20,
    flex: 1,
    marginVertical: 5,
  },
});
