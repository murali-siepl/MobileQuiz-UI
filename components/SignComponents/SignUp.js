import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import Input, { DateInput } from "./../shared/Input";
import CustomButton from "./../shared/Button";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import signupValidationSchema from "../../validationSchema/singup";
import { signInOrUp } from "./../../store/actions/Authenticate";
import { ErrorMessage } from "../shared/ErrorModal";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";

const SignUp = (props) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

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
            error={errors.fullName}
          />
          {errors.fullName && touched.fullName && (
            <ErrorMessage error={errors.fullName} />
          )}
          {console.log(values)}
          <Input
            holder="Enter  email"
            name="email"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
            keyboardType="email-address"
            error={errors.email}
          />
          {errors.email && touched.email && (
            <ErrorMessage error={errors.email} />
          )}
          <Input
            name="password"
            holder="Enter  password"
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            secureTextEntry
            error={errors.password}
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
          <Input
            name="location"
            holder="Enter  location"
            onChangeText={handleChange("location")}
            onBlur={handleBlur("location")}
            value={values.location}
            error={errors.location}
          />
          {errors.location && touched.location && (
            <ErrorMessage error={errors.location} />
          )}
          <DateInput onPress={showDatePicker} value={values.dateOfBirth} />
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
              touchWidth="80%"
              style={{ marginVertical: 15 }}
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
});
