import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "./../../shared/Button";
import Option from "./Option";
import Timer from "./../../shared/Timer";

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
      <View style={styles.timer}>
        {props.show && <Timer duration={30} nextQuestion={next} />}
      </View>

      <View style={styles.questionContainer}>
        <Text style={styles.question}>{props.index + 1}.</Text>
        <Text style={styles.questionContent}>{props.question}</Text>
      </View>
      <View style={styles.options}>
        {props.options.map((opt, i) => (
          <Option
            key={i}
            style={selectedOption === opt && styles.selected}
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
    </View>
  );
};

export default Question;

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
    paddingTop: 20,
  },
  selected: {
    borderColor: "orange",
  },
  question: {
    fontSize: 16,
    marginRight: 10,
  },
  questionContent: {
    flex: 1,
    fontSize: 16,
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
    justifyContent: "space-between",
    width: "90%",
  },
  timer: {
    position: "absolute",
    right: 15,
    top: -50,
  },
});
