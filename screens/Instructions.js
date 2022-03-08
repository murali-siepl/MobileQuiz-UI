import React from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import CustomButton, { BackToHome } from "../components/shared/Button";
import Heading from "../components/shared/Heading";
import Color from "../constants/Color";
import { globalStyles } from "../constants/GlobalStyles";
import Colors from "./../constants/Color";

const Instructions = (props) => {
  return (
    <View style={styles.container}>
      <View style={{ borderWidth: 1, borderColor: "#2E4150", borderRadius: 5 }}>
        <ScrollView
          contentContainerStyle={{
            ...globalStyles.scrollView,
            ...styles.scrollView,
          }}
        >
          <Heading style={styles.heading}>Instructions</Heading>
          <Text style={styles.text}>
            It is a logn established fact that a reader will be distracted by
            the fresuele content of a page when looking at its layout. The oint
            of using Lorem Ipsum is that it has a more-or less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </Text>
          <Text style={styles.text}>
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy. Various versions
            have evolved over the years, sometimes by accident, sometimes on
            purpose (injected humour and the like).
          </Text>

          <CustomButton
            touchWidth="100%"
            onPress={() => {
              props.navigation.navigate("Questions");
            }}
          >
            Start
          </CustomButton>
          <BackToHome {...props} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Instructions;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.inputBackGround,
    flex: 1,
    padding: 20,
  },
  scrollView: {
    backgroundColor: Color.lightGrey,
    padding: 20,
    borderRadius: 5,
  },
  heading: {
    marginTop: 0,
    marginBottom: 10,
    fontSize: 24,
    color: "white",
    fontWeight: "300",
  },
  text: {
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 20,
    color: Colors.textColor,
    fontFamily: "roboto",
  },
});
