import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import CustomButton from "./../../shared/Button";
import Option from "./Option";
import Timer from "./../../shared/Timer";
import Colors from "./../../../constants/Color";

const Question = (props) => {
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    setSelectedOption(null);
  }, []);

  const setOption = (opt) => {
    setSelectedOption(opt);
  };
  const skipQuestion = () => {
    props.nextQuestion({
      skip: true,
      selectedOption,
      notAnswered: false,
    });
  };

  const next = () => {
    props.nextQuestion({
      skip: false,
      selectedOption,
      notAnswered: selectedOption ? false : true,
    });
    setSelectedOption(null);
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.timer}>
          {props.show && <Timer duration={30} nextQuestion={next} />}
        </View>
        <Text style={styles.totalQuestios}>
          Question {props.index + 1} / {props.totalQuestions}
        </Text>
        <View style={styles.questionContainer}>
          <Text style={styles.questionContent}>{props.question}</Text>
        </View>
        <Text style={styles.please}>Please select your options</Text>
      </View>
      <ScrollView
        style={{ width: "100%" }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.options}>
          {props.options.map((opt, i) => (
            <Option
              key={i}
              style={
                selectedOption === props.answer &&
                opt === props.answer &&
                styles.correct
              }
              styleWrong={
                selectedOption === opt && opt !== props.answer && styles.wrong
              }
              styleCorrect={
                selectedOption && opt === props.answer && styles.correct
              }
              selectedOption={selectedOption}
              styleText={selectedOption === opt && styles.selectedText}
              styledTextCorrect={
                selectedOption && opt === props.answer && styles.selectedText
              }
              index={i}
              onPress={() => {
                setOption(opt);
              }}
            >
              {opt}
            </Option>
          ))}
        </View>
        <View style={styles.buttons}>
          <CustomButton touchWidth="40%" mh={5} onPress={skipQuestion}>
            Skip
          </CustomButton>
          <CustomButton touchWidth="40%" mh={5} onPress={next}>
            Next
          </CustomButton>
        </View>
      </ScrollView>
    </View>
  );
};

export default Question;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    height: "89%",
    backgroundColor: "#1A232A",
    borderColor: Colors.borderColor,
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    position: "relative",
  },
  totalQuestios: {
    color: Colors.orange,
    textAlign: "left",
    width: "100%",
    fontSize: 16,
    marginTop: 35,
  },
  customButton: { marginBottom: 10, alignItems: "flex-start" },
  questionContainer: {
    flexDirection: "row",
    width: "100%",
    marginVertical: 15,
  },
  questionContent: {
    flex: 1,
    fontSize: 16,
    color: "white",
  },
  please: {
    color: "#DDDDDD",
    textAlign: "left",
    width: "100%",
    fontSize: 13,
    fontWeight: "400",
    marginVertical: 15,
  },
  correct: {
    borderColor: "#0BFD63",
    backgroundColor: "#0BFD63",
  },
  wrong: {
    borderColor: "#FF4949",
    backgroundColor: "#FF4949",
  },
  selectedText: {
    color: "#000",
  },
  question: {
    fontSize: 16,
    marginRight: 10,
  },

  options: {
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
    marginTop: 50,
  },
  buttons: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-between",
    width: "100%",
  },
  timer: {
    position: "absolute",
    left: "40%",
    top: -50,
    backgroundColor: "#23313C",
    borderWidth: 1,
    borderColor: "#2E4150",
    borderRadius: 50,
    padding: 15,
  },
});
