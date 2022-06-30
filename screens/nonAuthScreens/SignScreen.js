import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Login from "../../components/SignComponents/Login";
import SignUp from "../../components/SignComponents/SignUp";
import { globalStyles } from "../../constants/GlobalStyles";
import Colors from "./../../constants/Color";
import Heading from "./../../components/shared/Heading";

const SignScreen = (props) => {
  const [login, setLogin] = useState(true);
  const isAuth = useSelector((state) => state.auth.token);
  useEffect(() => {
    props.navigation.setOptions({
      headerTitle: isAuth ? "Sign In" : "Sign Up",
    });
  }, [isAuth]);
  useEffect(() => {
    props.navigation.setOptions({
      headerTitle: login ? "Sign In" : "Sign Up",
    });
  }, [login]);
  return (
    <ScrollView
      style={{
        backgroundColor: Colors.SignBackground,
      }}
    >
      <View style={{ ...globalStyles.container, ...styles.section }}>
        <View style={styles.card}>
          <Text
            style={{
              ...styles.cardItem,
              backgroundColor: login ? Colors.SignBackground : "transparent",
              color: login ? "white" : "#999999",
            }}
            onPress={() => setLogin(true)}
          >
            Sign in
          </Text>
          <Text
            style={{
              ...styles.cardItem,
              backgroundColor: !login ? Colors.SignBackground : "transparent",
              color: !login ? "white" : "#999999",
            }}
            onPress={() => setLogin(false)}
          >
            Sign up
          </Text>
        </View>
        <Heading
          style={{
            marginTop: 50,
            marginBottom: 25,
            textAlign: "left",
            width: "90%",
          }}
        >
          {login ? "Sign In" : "Sign Up"}
        </Heading>
        {login && <Login data={props} />}
        {!login && <SignUp data={props} />}

        {login ? (
          <View style={styles.container}>
            <Text style={styles.sign}>Don't have an account ?</Text>
            <Text style={styles.link} onPress={() => setLogin(false)}>
              Sign up
            </Text>
          </View>
        ) : (
          <View style={styles.container}>
            <Text style={styles.sign}>Already have an account?</Text>
            <Text style={styles.link} onPress={() => setLogin(true)}>
              Sign in
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default SignScreen;

const styles = StyleSheet.create({
  section: {
    width: "100%",
    paddingVertical: 2 * StatusBar.currentHeight,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#151B21",
    width: "90%",
    justifyContent: "space-between",
    padding: 5,
    borderRadius: 10,
  },
  cardItem: {
    paddingVertical: 10,
    flex: 1,
    textAlign: "center",
    borderRadius: 10,
  },
  container: {
    marginTop: 20,
    flexDirection: "row",
  },
  sign: {
    color: "#FFFFFF",
    fontSize: 12,
  },
  link: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.orange,
  },
});
