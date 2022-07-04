import React, { useRef, useState } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import Heading from "./../shared/Heading";
import { globalStyles } from "./../../constants/GlobalStyles";
import Input from "./../shared/Input";
import CustomButton from "../shared/Button";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { forgetPassword } from "../../store/actions/Authenticate";
import { CheckBox } from "react-native-elements";
import PhoneInput from "react-native-phone-number-input";
import {
  ForgetValidationSchemaForMobile,
  ForgetValidationSchemaForEmail,
} from "./../../validationSchema/Login";
import { ErrorMessage } from "../shared/ErrorModal";
import Colors from "../../constants/Color";

const Forget = (props) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const [mobile, setMobile] = useState(true);
  const [email, setEmail] = useState(false);
  const [isValid, setisValid] = useState(true);
  const phoneInput = useRef(null);

  return (
    <View
      style={{
        ...globalStyles.container,
        backgroundColor: Colors.SignBackground,
      }}
    >
      <Heading
        style={{
          color: "white",
        }}
      >
        We need to verify your identity
      </Heading>
      <Image
        style={styles.image}
        source={require("../../assets/images/forget.png")}
      />

      <View style={styles.checkboxContainer}>
        <CheckBox
          title="Send code through mobile"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={mobile}
          onPress={() => {
            setMobile(true);
            setEmail(false);
          }}
          checkedColor="green"
          containerStyle={styles.checkbox}
          textStyle={{ color: "#fff" }}
        />

        <CheckBox
          title="Send code through email"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={email}
          onPress={() => {
            setEmail(true);
            setMobile(false);
          }}
          containerStyle={styles.checkbox}
          checkedColor="green"
          textStyle={{ color: "#fff" }}
        />
      </View>
      <Formik
        initialValues={mobile ? { phone: "" } : { email: "" }}
        validationSchema={
          mobile
            ? ForgetValidationSchemaForMobile
            : ForgetValidationSchemaForEmail
        }
        enableReinitialize={true}
        onSubmit={(values) => {
          if (mobile) {
            const checkValid = phoneInput.current?.isValidNumber(values.phone);
            if (checkValid) {
              dispatch(forgetPassword(values, props.navigation, mobile));
              setisValid(true);
            } else {
              setisValid(false);
            }
          } else {
            dispatch(forgetPassword(values, props.navigation, mobile));
          }
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
            {mobile ? (
              <View>
                <PhoneInput
                  ref={phoneInput}
                  defaultValue={values.phone}
                  defaultCode="IN"
                  onChangeFormattedText={handleChange("phone")}
                  withShadow
                  containerStyle={styles.phoneInput}
                  textContainerStyle={{
                    borderRadius: 10,
                    backgroundColor: Colors.inputBackGround,
                  }}
                  textInputStyle={{
                    color: "#999999",
                    fontSize: 14,
                  }}
                  codeTextStyle={{
                    fontSize: 14,
                    color: "#999999",
                  }}
                  textInputProps={{
                    placeholderTextColor: "#999999",
                  }}
                />

                {(!isValid || errors.phone) && (
                  <ErrorMessage
                    error={
                      errors.phone ? errors.phone : "Phone number is not valid"
                    }
                  />
                )}
              </View>
            ) : (
              <Input
                setWidth="90%"
                holder={`Enter Email ID`}
                name="email"
                label="Email"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
                error={errors.email}
                autoComplete="email"
                touched={touched.email}
              />
            )}

            {loading ? (
              <ActivityIndicator color="red" size="large" />
            ) : (
              <CustomButton
                style={{ marginTop: 40 }}
                touchWidth="90%"
                onPress={handleSubmit}
                // onPress={() => {
                //   props.navigation.navigate("Reset");
                // }}
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

export default Forget;

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
  },
  text: {
    width: "80%",
    textAlign: "center",
    lineHeight: 25,
    fontSize: 17,
    marginBottom: 15,
  },
  checkboxContainer: {
    width: "95%",
    marginBottom: 10,
  },
  checkbox: {
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
    borderColor: "#1B222A",
    borderWidth: 1,
    backgroundColor: "#151B21",
  },
  phoneInput: {
    width: "90%",
    borderRadius: 10,
    backgroundColor: Colors.inputBackGround,
    color: "white",
    borderColor: "#1B222A",
    borderWidth: 1,
  },
});
