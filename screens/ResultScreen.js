import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "./../constants/GlobalStyles";
import { useRoute } from "@react-navigation/native";
import CustomButton from "../components/shared/Button";

const ResultScreen = (props) => {
  const route = useRoute();
  const answers = route.params.answers;

  let skip = 0;
  let notAnswered = 0;
  let answered = 0;
  answers.forEach((ans) => {
    if (ans.skip) {
      skip += 1;
    } else if (ans.notAnswered) {
      notAnswered += 1;
    } else {
      answered += 1;
    }
  });

  return (
    <View style={{ ...globalStyles.container, ...styles.container }}>
      <Text style={styles.heading}>Result</Text>
      <View style={styles.result}>
        <DisplayItem label="Answered" text={answered} />
        <DisplayItem label="Skip" text={skip} />
        <DisplayItem label="Not Answered" text={notAnswered} />
      </View>
      <CustomButton
        touchWidth="40%"
        mh={5}
        mv={10}
        onPress={() => {
          props.navigation.replace("Dashboard");
        }}
      >
        Menu
      </CustomButton>
    </View>
  );
};
const DisplayItem = (props) => (
  <View style={styles.DisplayItem}>
    <Text style={styles.item}>{props.label}</Text>
    <Text style={styles.item}>{props.text}</Text>
  </View>
);
export default ResultScreen;

const styles = StyleSheet.create({
  container: { backgroundColor: "#CCD1E4" },
  heading: {
    fontSize: 20,
    marginBottom: 10,
  },
  result: {
    width: "90%",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
  },
  DisplayItem: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  item: {
    fontSize: 16,
    marginVertical: 5,
  },
});
