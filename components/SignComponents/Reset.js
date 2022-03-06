import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Heading from "./../shared/Heading";
import { globalStyles } from "./../../constants/GlobalStyles";
import Input from "./../shared/Input";
import CustomButton from "../shared/Button";
import Colors from "./../../constants/Color";
import { Formik } from "formik";
import { ResetValidationSchema } from "./../../validationSchema/Login";
import { useDispatch, useSelector } from "react-redux";
import {
  forgetPassword,
  resetPassword,
} from "./../../store/actions/Authenticate";
import { useRoute } from "@react-navigation/native";
import { ErrorMessage } from "../shared/ErrorModal";

const Reset = (props) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  const route = useRoute();

  return (
    <View style={globalStyles.container}>
      <Heading
        style={{
          marginTop: 0,
          marginBottom: 50,
        }}
      >
        Reset your account password
      </Heading>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Please provide this security code which sent to your registered email
          id
        </Text>
        <Text style={styles.text}>didn't receive the security code ?</Text>
        <TouchableOpacity
          activeOpacity={0.5}
          style={{ width: 100, paddingVertical: 5 }}
          onPress={() => {
            dispatch(forgetPassword(route.params, props.navigation, "resend"));
          }}
        >
          <Text style={{ ...styles.text, ...styles.resend }}>Resend code</Text>
        </TouchableOpacity>
      </View>
      <Formik
        initialValues={{ token: "", password: "", confirmPassword: "" }}
        validationSchema={ResetValidationSchema}
        onSubmit={(values) => {
          dispatch(resetPassword(values, props.navigation));
        }}
      >
        {({
          handleChange,
          handleBlur,
          values,
          errors,
          handleSubmit,
          touched,
        }) => (
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Input
              style={styles.input}
              holder="Security code"
              name="token"
              onChangeText={handleChange("token")}
              onBlur={handleBlur("token")}
              value={values.token}
              error={errors.token}
              keyboardType="numeric"
            />
            {errors.token && touched.token && (
              <ErrorMessage error={errors.token} />
            )}
            <Input
              name="password"
              holder="Enter  password"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              error={errors.password}
              secureTextEntry
            />
            {errors.password && touched.password && (
              <ErrorMessage error={errors.password} />
            )}
            <Input
              name="confirmPassword"
              holder="Confirm password"
              onChangeText={handleChange("confirmPassword")}
              onBlur={handleBlur("confirmPassword")}
              value={values.confirmPassword}
              error={errors.confirmPassword}
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <ErrorMessage error={errors.confirmPassword} />
            )}
            {loading ? (
              <ActivityIndicator color="red" size="large" />
            ) : (
              <CustomButton
                style={{ marginTop: 10 }}
                touchWidth="80%"
                onPress={handleSubmit}
              >
                Submit
              </CustomButton>
            )}
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Reset;

const styles = StyleSheet.create({
  textContainer: {
    width: "80%",
    marginBottom: 25,
  },
  text: {
    fontSize: 17,
    marginBottom: 5,
    lineHeight: 22,
  },
  resend: {
    color: Colors.blue,
  },
  input: {
    fontSize: 16,
    paddingHorizontal: 12,
  },
});
