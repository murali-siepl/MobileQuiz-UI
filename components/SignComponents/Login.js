import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Input from "./../shared/Input";
import CustomButton from "./../shared/Button";
import Colors from "../../constants/Color";
import { useDispatch, useSelector } from "react-redux";

import { Formik } from "formik";
import loginValidationSchema from "../../validationSchema/Login";
import { ActivityIndicator } from "react-native";
import { signInOrUp } from "./../../store/actions/Authenticate";
import { ErrorMessage } from "../shared/ErrorModal";

const Login = (props) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginValidationSchema}
      onSubmit={(values) => {
        dispatch(signInOrUp(values, "login"));
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View style={styles.contaier}>
          <Input
            name="email"
            holder="Enter  email"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
            keyboardType="email-address"
            error={errors.email}
            autoComplete="email"
          />

          {errors.email && touched.email && (
            <ErrorMessage error={errors.email} />
          )}

          <Input
            name="password"
            holder="Enter password"
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            secureTextEntry
            error={errors.password}
          />
          {errors.password && touched.password && (
            <ErrorMessage error={errors.password} />
          )}
          <Text
            style={styles.forget}
            onPress={() => {
              props.data.navigation.navigate("Forgot");
            }}
          >
            Forgot password
          </Text>
          {loading ? (
            <ActivityIndicator color="red" size="large" />
          ) : (
            <CustomButton
              style={{
                marginVertical: 30,
                marginBottom: 50,
              }}
              touchWidth="80%"
              onPress={handleSubmit}
            >
              Login
            </CustomButton>
          )}
        </View>
      )}
    </Formik>
  );
};

export default Login;

const styles = StyleSheet.create({
  contaier: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  forget: {
    width: "75%",
    color: Colors.blue,
    textAlign: "left",
    fontSize: 18,
    marginBottom: 10,
  },
});
