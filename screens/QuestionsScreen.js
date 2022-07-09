import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import { dummyQuestions } from "./../dummy-data/questions";
import axios from 'axios';
import Question from "./../components/DashboardComponents/questions/Question";
import Color from "../constants/Color";

const baseUrl = 'http://23.102.128.226:5000/api';
const answersList = [];
const QuestionsScreen = (props) => {

  const [QuizQuesObj, setQuizQuesObj] = useState([]);
  const [QuizQuesLen, setQuizQuesLen] = useState(0);
  const [QuizQues, setQuizQues] = useState([]);

  useEffect(() => {
    getQuestionApi();
  }, [])

  const getQuestionApi = async () => {
    try {
      const configurationObject = {
        method: 'get',
        url: `${baseUrl}/quizzes/getQuizQ`,
      }
      const response = await axios(configurationObject);
      if (response) {
        console.log("dummy--------------------", props.route.params.subject);
        console.log("rrrrrrrrrrrrrrrrrr========", response.data.results.createdQuiz);
        if(response){
          const Questions = response?.data?.results?.createdQuiz.map((e)=>{
            if(props.route.params.subject.toLowerCase() === e?.title.toLowerCase()){
              console.log("eeeeeeeeeee", e);
              return e;
            }
          })
          setQuizQuesObj(Questions)
          setQuizQues(Questions.questions);
          console.log("Questions.questions.lengthQuestions.questions.length", Questions.questions.length);
          setQuizQuesLen(Questions.questions.length)
        }
      }
    } catch (err) {
      console.log("error", err);
    }
  }

  // console.log('propspropspropspropspropspropsprops', props);

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


  console.log("Quizzzzzzzzzzzz", QuizQuesLen);

  return (
    <View style={styles.container}>
      <View style={styles.percent40}></View>
      <View style={styles.percent60}></View>
      <View style={styles.questionContainer}>
        <Question
          index={index}
          options={dummyQuestions[index].options}
          question={dummyQuestions[index].question}
          nextQuestion={nextQuestion}
          show={show}
          answer={dummyQuestions[index].answer}
          totalQuestions={dummyQuestions.length}
        />
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
