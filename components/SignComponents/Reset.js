import React, { useState } from "react";
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
import Color from "./../../constants/Color";
import Eye from "./Eye";
import { ScrollView } from "react-native";

const Reset = (props) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const [showPass, setShowPass] = useState(false);
  const [showConfPass, setShowConfPass] = useState(false);

  const route = useRoute();
  return (
    <View style={{ ...globalStyles.container, ...styles.container }}>
      <ScrollView
        style={{ width: "100%" }}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
          flexGrow: 1,
        }}
      >
        <Heading
          style={{
            marginBottom: 10,
            color: "white",
            textAlign: "left",
            width: "90%",
          }}
        >
          Reset your account password
        </Heading>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Please provide this security code which sent to your registered
            email id or phone number.
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 15,
            }}
          >
            <Text style={styles.text}>didn't receive the security code ?</Text>
            <TouchableOpacity
              activeOpacity={0.5}
              style={{ width: 100, paddingVertical: 5, marginLeft: 5 }}
              onPress={() => {
                dispatch(
                  forgetPassword(route?.params, props.navigation, route?.params?.mobile)
                );
              }}
            >
              <Text style={{ ...styles.text, ...styles.resend }}>
                Resend code
              </Text>
            </TouchableOpacity>
          </View>
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
                holder="Enter code"
                name="token"
                onChangeText={handleChange("token")}
                onBlur={handleBlur("token")}
                value={values.token}
                error={errors.token}
                keyboardType="numeric"
                touched={touched.token}
                label="Security Code"
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
                <Eye showpassword={showPass} setShowPass={setShowPass} />
              </View>
              <View style={styles.password}>
                <Input
                  name="confirmPassword"
                  holder="RE-Enter password"
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  value={values.confirmPassword}
                  error={errors.confirmPassword}
                  label="Confirm Password"
                  touched={touched.confirmPassword}
                  secureTextEntry={!showConfPass}
                  paddingRight={45}
                />
                <Eye
                  showpassword={showConfPass}
                  setShowPass={setShowConfPass}
                />
              </View>

              {loading ? (
                <ActivityIndicator color="red" size="large" />
              ) : (
                <CustomButton
                  style={{ marginTop: 10 }}
                  touchWidth="90%"
                  onPress={handleSubmit}
                >
                  Submit
                </CustomButton>
              )}
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
};

export default Reset;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.SignBackground,
    paddingVertical: 20,
  },
  textContainer: {
    width: "90%",
    marginBottom: 25,
  },
  text: {
    fontSize: 14,
    marginBottom: 5,
    lineHeight: 20,
    color: Colors.textColor,
  },
  resend: {
    color: Colors.orange,
  },
  input: {
    fontSize: 16,
    paddingHorizontal: 12,
  },
  password: {
    width: "100%",
    alignItems: "center",
    position: "relative",
  },
});
