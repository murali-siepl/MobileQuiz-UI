import React from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { globalStyles } from "./../constants/GlobalStyles";
import { useRoute } from "@react-navigation/native";
import CustomButton, { BackToHome } from "../components/shared/Button";
import Color from "../constants/Color";

const ResultScreen = (props) => {
  const route = useRoute();
  const answers = route.params.answers;

  let skip = 0;
  let notAnswered = 0;
  let answered = 0;
  let time = 0;
  answers.forEach((ans) => {
    time += ans.timeTaken
    if (ans.skip) {
      skip += 1;
    } else if (ans.notAnswered) {
      notAnswered += 1;
    } else {
      answered += 1;
    }
  });

  return (
    <ScrollView contentContainerStyle={{ ...globalStyles.scrollView }}>
      <View style={{ ...globalStyles.container, ...styles.container }}>
        <View style={styles.imageContainer}>
          <Image source={require("../assets/images/Results/result.png")} />
        </View>
        <View style={styles.result}>
          <DisplayItem label="Total No. Of Questions :" text={answers.length} />
          <DisplayItem label="Total No. Answered :" text={answered} />
          <DisplayItem label="Total No.Unanswered :" text={notAnswered} />
          <DisplayItem label="Total No. Skiped :" text={skip} />
          <DisplayItem label="Total Time Taken :" text={Math.floor(time / 60) + ":" + (time - Math.floor(time / 60) * 60)} />

          <CustomButton
            touchWidth="100%"
            onPress={() => {
              props.navigation.replace("Overview");
            }}
            style={{ marginTop: 20 }}
          >
            Overview
          </CustomButton>
          <BackToHome {...props} />
        </View>
      </View>
    </ScrollView>
  );
};
const DisplayItem = (props) => (
  <View style={styles.DisplayItem}>
    <Text style={styles.item}>{props.label}</Text>
    <Text style={{ ...styles.item, ...styles.text }}>{props.text}</Text>
  </View>
);
export default ResultScreen;

const styles = StyleSheet.create({
  container: { backgroundColor: Color.darkBlack, width: "100%", padding: 20 },
  heading: {
    fontSize: 20,
    marginBottom: 10,
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: Color.borderColor,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 26,
    borderRadius: 10,
  },
  result: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: Color.borderColor,
    borderRadius: 10,
    padding: 20,
    width: "100%",
  },
  DisplayItem: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  item: {
    fontSize: 14,
    marginVertical: 8,
    color: "#BBBBBB",
  },
  text: {
    backgroundColor: Color.lightGreen,
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: "#000",
    borderRadius: 50,
    width: 84,
    height: 27,
    textAlign: "center",
  },
});
