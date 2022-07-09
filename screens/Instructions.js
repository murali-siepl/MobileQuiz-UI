import React from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import CustomButton, { BackToHome } from "../components/shared/Button";
import Heading from "../components/shared/Heading";
import Color from "../constants/Color";
import { globalStyles } from "../constants/GlobalStyles";
import Colors from "./../constants/Color";

const Instructions = (props) => {
  return (
    <View style={styles.container}>
      <View style={{ borderWidth: 1, borderColor: "#2E4150", borderRadius: 5 }}>
        <ScrollView
          contentContainerStyle={{
            ...globalStyles.scrollView,
            ...styles.scrollView,
          }}
        >
          <Heading style={styles.heading}>Game Instructions </Heading>
          <Text style={styles.text}>
            1.This game consist of three type of questions :{`\n`}

            A) Single correct answer  multiple choice questions.{`\n`}
            B) More the one correct answers multiple choice questions.{`\n`}
            C) True and False type questions.{`\n`}

          </Text>
          <Text style={styles.text}>
          2. You will have only 30 sec to answer questions after that it will switch to next questions . Also it will be marked as unanswered and you will get Zero point. 
          </Text>


          <Text style={styles.text}>
          3. You can skip a questions without giving an answer. But zero point will be add to your points. 
          </Text>

          <Text style={styles.text}>
          4. You will get +1 point for every correct answer  and For every incorrect answer you will - 1.{`\n`} {`\n`}
          5. You can't go previous question once you moved ahead.           
          </Text>
          
     
      

          <CustomButton
            touchWidth="100%"
            onPress={() => {
              props.navigation.navigate("Questions");
            }}
          >
            Start
          </CustomButton>
          <BackToHome {...props} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Instructions;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.inputBackGround,
    flex: 1,
    padding: 20,
  },
  scrollView: {
    backgroundColor: Color.lightGrey,
    padding: 20,
    borderRadius: 5,
  },
  heading: {
    marginTop: 0,
    marginBottom: 10,
    fontSize: 24,
    color: "white",
    fontWeight: "300",
  },
  text: {
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 20,
    color: Colors.textColor,
    fontFamily: "roboto",
  },
});
