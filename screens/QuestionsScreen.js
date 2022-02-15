import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/shared/Button";

import { dummyQuestions } from "./../dummy-data/questions";
import Question from "./../components/DashboardComponents/questions/Question";

const answersList = [];
const QuestionsScreen = (props) => {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  const nextQuestion = (data) => {
    if (index > dummyQuestions.length - 1) {
      return;
    }
    answersList.push(data);
    if (index === dummyQuestions.length - 1) {
      props.navigation.replace("Result", { answers: answersList });
      return;
    }
    setIndex((prev) => prev + 1);
    setShow(false);
  };
  useEffect(() => {
    setShow(true);
  }, [index]);

  return (
    <View style={styles.container}>
      <View>
        <CustomButton>go to list</CustomButton>
      </View>
      <Question
        index={index}
        options={dummyQuestions[index].options}
        question={dummyQuestions[index].question}
        nextQuestion={nextQuestion}
        show={show}
      />
    </View>
  );
};

export default QuestionsScreen;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    marginTop: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
});
