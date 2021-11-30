import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Login from "../../components/SignComponents/Login";
import SignUp from "../../components/SignComponents/SignUp";
import { globalStyles } from "../../constants/GlobalStyles";
import Colors from "./../../constants/Color";

const SignScreen = (props) => {
  const [login, setLogin] = useState(false);
  useEffect(() => {
    props.navigation.setOptions({
      headerTitle: login ? "Sign In" : "Sign Up",
    });
  }, [login]);
  return (
    <View style={globalStyles.container}>
      <Text style={styles.welcome}>
        {login ? "Welcome back! To quiz app." : "Welcome to Quiz App"}
      </Text>
      <Text style={styles.message}>
        {login
          ? "Want to play a quiz? Please log in to continue."
          : "Please provide the following details for sign up and to create an account."}
      </Text>
      {login && <Login data={props} />}
      {!login && <SignUp data={props} />}

      {login && (
        <View style={styles.container}>
          <Text style={styles.sign}>Don't have an account ?</Text>
          <Text style={styles.link} onPress={() => setLogin(false)}>
            Sign up
          </Text>
        </View>
      )}
      {!login && (
        <View style={styles.container}>
          <Text style={styles.sign}>Already have an account?</Text>
          <Text style={styles.link} onPress={() => setLogin(true)}>
            Sign in
          </Text>
        </View>
      )}
    </View>
  );
};

export default SignScreen;

const styles = StyleSheet.create({
  welcome: {
    fontSize: 25,
    fontWeight: "bold",
  },
  message: {
    width: "80%",
    textAlign: "center",
    lineHeight: 25,
    fontSize: 18,
    marginVertical: 20,
  },
  container: {
    flexDirection: "row",
  },
  sign: {
    fontSize: 16,
    fontWeight: "bold",
  },
  link: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.blue,
  },
});
