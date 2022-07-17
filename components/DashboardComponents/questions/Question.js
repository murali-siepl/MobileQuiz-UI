import React, { useEffect, useState,useRef } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import CustomButton from "./../../shared/Button";
import {ExitCustomButton} from "./../../shared/Button";
import Option from "./Option";
import Timer from "./../../shared/Timer";
import Colors from "./../../../constants/Color";
import { useNavigation } from '@react-navigation/native';
import ModalScreen from "../../../screens/views/modalScreen";

const Question = (props) => {

  const navigation = useNavigation();

  console.log("props", props.options);
  const timerRef = useRef();

  const [modal, setModal] = useState(false);

  const [selectedOption, setSelectedOption] = useState(null);
  const [answer,setAnswer] = useState("");
  
  useEffect(() => {
    setSelectedOption(null);
  }, []);

  useEffect(() => {
    setAnswer(props.options.find(e=>e.isCorrect).text)
  }, [props]);

  const setOption = (opt) => {
    setSelectedOption(opt);
  };
  const skipQuestion = () => {
    let time = timerRef.current.getAlert();
    props.nextQuestion({
      skip: true,
      selectedOption,
      notAnswered: false,
      timeTaken: time
    });
    setSelectedOption(null);
  };

  const next = () => {
    let time = timerRef.current.getAlert();
    props.nextQuestion({
      skip: false,
      selectedOption,
      notAnswered: selectedOption ? false : true,
      timeTaken:time
    });
    setSelectedOption(null);
  };

  const handleModal = () => {
    setModal(true);
  }

  const handleExitButton = () => {
    setModal(false);
    navigation.navigate('Dashboard');
  }

  const handleModalOnly= () => {
    setModal(false);
  }

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.timer}>
          {props.show && <Timer duration={30} nextQuestion={next} index={props.index} ref={timerRef} />}
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
                selectedOption === answer &&
                opt.text === answer &&
                styles.correct
              }
              styleWrong={
                selectedOption === opt.text && opt.text !== answer && styles.wrong
              }
              styleCorrect={
                selectedOption && opt.text === answer && styles.correct
              }
              selectedOption={selectedOption}
              styleText={selectedOption === opt.text && styles.selectedText}
              styledTextCorrect={
                selectedOption && opt.text === answer && styles.selectedText
              }
              index={i}
              onPress={() => {
                setOption(opt.text);
              }}
            >
              {opt.text}
            </Option>
          ))}
        </View>
        <View style={styles.buttons}>
          <ExitCustomButton touchWidth="40%" mh={5} onPress={skipQuestion}>
            Skip
          </ExitCustomButton>
          <ExitCustomButton touchWidth="40%" mh={5} onPress={handleModal}>
            Exit
          </ExitCustomButton>
          <ExitCustomButton touchWidth="40%" mh={5} onPress={next}>
            Next
          </ExitCustomButton>
        </View>
      </ScrollView>
      {
        modal && <ModalScreen handleExit = {handleExitButton} handleModalOnly= {handleModalOnly}/>
      }
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
