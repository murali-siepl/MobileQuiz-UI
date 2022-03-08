import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Input from "./../shared/Input";
import CustomButton from "./../shared/Button";
import Colors from "../../constants/Color";
import { useDispatch, useSelector } from "react-redux";

import { Formik } from "formik";
import loginValidationSchema from "../../validationSchema/Login";
import { ActivityIndicator } from "react-native";
import { signInOrUp } from "./../../store/actions/Authenticate";
import Eye from "./Eye";

const Login = (props) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const [showPass, setShowPass] = useState(false);

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
            label="Email"
            touched={touched.email}
          />
          <View style={styles.password}>
            <Input
              name="password"
              holder="Enter password"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              secureTextEntry={!showPass}
              error={errors.password}
              label="Password"
              touched={touched.password}
              paddingRight={45}
            />
            <Eye setShowPass={setShowPass} />
          </View>

          <Text
            style={styles.forget}
            onPress={() => {
              props.data.navigation.navigate("Forgot");
            }}
          >
            Forgot Password ?
          </Text>
          {loading ? (
            <ActivityIndicator color="red" size="large" />
          ) : (
            <CustomButton
              style={{
                marginVertical: 30,
                marginBottom: 0,
              }}
              touchWidth="90%"
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
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  forget: {
    width: "85%",
    color: Colors.orange,
    textAlign: "left",
    fontSize: 14,
    marginBottom: 10,
  },
  password: {
    width: "100%",
    alignItems: "center",
    position: "relative",
  },
});
