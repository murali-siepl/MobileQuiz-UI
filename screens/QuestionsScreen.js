import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/shared/Button";
import Timer from "./../components/shared/Timer";

const QuestionsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.timer}>
        <Timer duration={30} />
      </View>
      <View>
        <CustomButton>go to list</CustomButton>
      </View>
      <View style={styles.questionContainer}>
        <Text style={styles.question}>1.</Text>
        <Text style={styles.questionContent}>
          United Arab Emirates is a federation of _________ emirates
        </Text>
      </View>
      <View style={styles.options}>
        <CustomButton style={styles.customButton} touchWidth="90%">
          (A).4
        </CustomButton>
        <CustomButton style={styles.customButton} touchWidth="90%">
          (B).5
        </CustomButton>
        <CustomButton style={styles.customButton} touchWidth="90%">
          (C).7
        </CustomButton>
        <CustomButton style={styles.customButton} touchWidth="90%">
          (D).8
        </CustomButton>
      </View>
      <View style={styles.buttons}>
        <CustomButton touchWidth="30%" mh={5}>
          Prev
        </CustomButton>
        <CustomButton touchWidth="30%" mh={5}>
          Skip
        </CustomButton>
        <CustomButton touchWidth="30%" mh={5}>
          Next
        </CustomButton>
      </View>
    </View>
  );
};

export default QuestionsScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",

    flex: 1,
  },
  customButton: { marginBottom: 10, alignItems: "flex-start" },
  questionContainer: {
    flexDirection: "row",
    width: "90%",
    padding: 10,
    paddingTop: 40,
  },
  question: {
    fontSize: 16,
    marginRight: 10,
  },
  questionContent: {
    flex: 1,
    fontSize: 16,
  },
  timer: {
    position: "absolute",
    right: 15,
  },
  options: {
    width: "100%",
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
  },
  buttons: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-around",
  },
});
