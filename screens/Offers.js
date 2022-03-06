import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/shared/Button";
import Heading from "../components/shared/Heading";

const Offers = (props) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Heading style={styles.heading}>Offers</Heading>
        <Text style={styles.text}>
          The quizzes consists of questions carefully designed to help you
          self-assess your comprehension of the information presented on the
          topics covered in the module. No data will be collected on the website
          regarding your responses or how many times you take the quiz. Each
          question in the quiz is of multiple-choice or "true or false" format.
          Read each question carefully, and click on the button next to your
          response that is based on the information covered on the topic in the
          module. Each correct or incorrect response will result in appropriate
          feedback immediately at the bottom of the screen. After responding to
          a question, click on the "Next Question" button at the bottom to go to
          the next questino. After responding to the 8th question, click on
          "Close" on the top of the window to exit the quiz. If you select an
          incorrect response for a question, you can try again until you get the
          correct response.
        </Text>
        {/* <CustomButton
          touchWidth="100%"
          onPress={() => {
            props.navigation.navigate("Questions");
          }}
        >
          Start Quiz
        </CustomButton> */}
      </View>
    </ScrollView>
  );
};

export default Offers;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  heading: {
    marginTop: 0,
    marginBottom: 10,
    fontSize: 26,
  },
  text: {
    fontSize: 16.5,
    lineHeight: 22,
    marginBottom: 20,

    fontFamily: "roboto",
  },
});
