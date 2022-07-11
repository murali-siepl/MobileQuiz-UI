import React, { useEffect, useState } from "react";
import { StyleSheet, View, Alert } from "react-native";

import { dummyQuestions } from "./../dummy-data/questions";
import Question from "./../components/DashboardComponents/questions/Question";
import QuestionReducer from "./../store/reducers/Question"
import Color from "../constants/Color";
import { questions, userQuestion } from "../store/actions/Question";
import { useDispatch, useSelector } from "react-redux";
import Auth from '../helpers/routes';

let answersList = [];
const QuestionsScreen = (props) => {

  console.log("propspropspropsprops", props.route.params.subject);


  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.auth);
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);
  const [result, setResult] = useState([]);

  const [quesTitle, setQuesTitle] = useState('');
  const [ansTitle, setAnsTitle] = useState('');
  const [optionTitle, setOptionTitle] = useState([]);
  const [lenTitle, setLenTitle] = useState(0);

  const nextQuestion = (data) => {
    // if (index > dummyQuestions.length - 1) {
    //   return;
    // }
    // answersList.push(data);
    // if (index === dummyQuestions.length - 1) {
    //   props.navigation.replace("Result", { answers: answersList });
    //   return;
    // }
    if (index > quesData?.questions?.results?.createdQuiz[0]?.questions.length - 1) {
      return;
    }
    answersList.push(data);
    if (index === quesData?.questions?.results?.createdQuiz[0]?.questions.length - 1) {
      props.navigation.replace("Result", { answers: answersList });
      return;
    }
    setIndex((prev) => prev + 1);
    // setShow(false);
  };

  useEffect(()=>{
    answersList = [];
  }, [props.route.params.subject])

  const quesData = useSelector((state) => state.ques);
  // useEffect(async () => {
  //   if (props.route.params.subject) {
  //     dispatch(userQuestion(props.route.params.subject));
  //     setShow(true);
  //   }
  // }, [props.route.params.subject]);

  useEffect(() => {
    async function testfunction() {
      let temp = await quesData?.questions?.results?.createdQuiz[0]?.questions[index].options.map((e) => {
        console.log(e.isCorrect)
        if (e.isCorrect == true) {
          return e.text;
        }
  
      })
      let ans = await temp.map((e) => {
        if (e != undefined) {
          ans = e;
        }
      })
      setAnsTitle(ans);
    }
    testfunction()
  }, [index])

  return (
    <View style={styles.container}>
      <View style={styles.percent40}></View>
      <View style={styles.percent60}></View>
      <View style={styles.questionContainer}>
        {
          quesData?.questions?.results?.createdQuiz.length == 0 ?
          Alert.alert(
            "No Data",
            "No Data in the Api",
            [
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          )
            :
            <Question
              index={index}
              options={quesData?.questions?.results?.createdQuiz[0]?.questions[index].options}
              question={quesData?.questions?.results?.createdQuiz[0]?.questions[index].title}
              nextQuestion={nextQuestion}
              show={show}
              answer={ansTitle}
              totalQuestions={quesData?.questions?.results?.createdQuiz[0]?.questions.length}
            />
        }
      </View>
    </View>
  );
};

export default QuestionsScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  percent40: {
    height: "30%",
    backgroundColor: Color.darkGreen,
    width: "100%",
  },
  percent40: {
    height: "70%",
    backgroundColor: "#1A232A",
    width: "100%",
    flex: 1,
  },
  questionContainer: {
    position: "absolute",
    top: "10%",
    width: "88%",
    height: "100%",
  },
});
