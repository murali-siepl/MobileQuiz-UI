import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, View, Image } from "react-native";
import Input, { DateInput } from "./../shared/Input";
import CustomButton from "./../shared/Button";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import signupValidationSchema from "../../validationSchema/singup";
import { signInOrUp } from "./../../store/actions/Authenticate";
import { ErrorMessage } from "../shared/ErrorModal";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import Eye from "./Eye";

const SignUp = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showConfPass, setShowConfPass] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date, setFieldValue) => {
    setFieldValue("dateOfBirth", moment(date).format("DD/MM/YYYY"));
    hideDatePicker();
  };
  return (
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        location: "",
        dateOfBirth: "",
      }}
      validationSchema={signupValidationSchema}
      onSubmit={(values) => {
        dispatch(signInOrUp(values, "signup"));
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        setFieldValue,
      }) => (
        <View style={styles.contaier}>
          <Input
            holder="Enter  full name"
            name="fullName"
            onChangeText={handleChange("fullName")}
            onBlur={handleBlur("fullName")}
            value={values.fullName}
            label="Name"
            error={errors.fullName}
            touched={touched.fullName}
          />

          <Input
            holder="Enter  email"
            name="email"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
            keyboardType="email-address"
            label="Email Id"
            error={errors.email}
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
            <Eye showpassword={showConfPass} setShowPass={setShowConfPass} />
          </View>

          <Input
            name="location"
            holder="Enter  location"
            onChangeText={handleChange("location")}
            onBlur={handleBlur("location")}
            value={values.location}
            error={errors.location}
            label="Location"
            touched={touched.location}
          />
          <View style={styles.password}>
            <DateInput
              onPress={showDatePicker}
              value={values.dateOfBirth}
              label="Date of Birth"
            />
            <Eye calendar={true} setShowPass={showDatePicker} />
          </View>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={(date) => handleConfirm(date, setFieldValue)}
            onCancel={hideDatePicker}
          />
          {errors.dateOfBirth && touched.dateOfBirth && (
            <ErrorMessage error={errors.dateOfBirth} />
          )}
          {loading ? (
            <ActivityIndicator color="red" size="large" />
          ) : (
            <CustomButton
              touchWidth="90%"
              style={{ marginTop: 20 }}
              onPress={handleSubmit}
            >
              Register
            </CustomButton>
          )}
        </View>
      )}
    </Formik>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  contaier: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  password: {
    width: "100%",
    alignItems: "center",
    position: "relative",
  },
});
