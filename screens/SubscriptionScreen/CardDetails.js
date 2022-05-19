import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, View, Image } from "react-native";
import Input, { DateInput } from "../../components/shared/Input";
import CustomButton from "../../components/shared/Button";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import signupValidationSchema from "../../validationSchema/singup";
import { signInOrUp } from "./../../store/actions/Authenticate";
import { ErrorMessage } from "../../components/shared/ErrorModal";
import { CheckBox } from "react-native-elements";

const CardDetails = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const [mobile, setMobile] = useState(false);

  return (
    <Formik
      initialValues={{
        cardNumber: "",
        CardholderName: "",
        ExpireDate: "",
        cvv: "",
      }}
      validationSchema={signupValidationSchema}
      onSubmit={(values) => {
        delete values.confirmPassword;
        console.log(values);
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
        <View style={styles.innerContaier}>
          <View style={styles.spaceBetween}>
            <Input
              holder="Enter Card Number"
              name="cardNumber"
              onChangeText={handleChange("cardNumber")}
              onBlur={handleBlur("cardNumber")}
              value={values.cardNumber}
              label="CARD NUMBER"
              error={errors.cardNumber}
              touched={touched.cardNumber}
            />
            <Image
              style={styles.subImgWithBg}
              source={require("../../assets/images/card-type.png")}
            />
          </View>

          <Input
            holder="Enter Cardholder Name"
            name="CardholderName"
            onChangeText={handleChange("CardholderName")}
            onBlur={handleBlur("CardholderName")}
            value={values.CardholderName}
            label="CARDHOLDER NAME"
            error={errors.CardholderName}
            touched={touched.CardholderName}
          />

          <View style={styles.spaceBetween}>
            <View style={styles.input}>
              <Input
                name="ExpireDate"
                holder="Enter MM / YY"
                onChangeText={handleChange("ExpireDate")}
                onBlur={handleBlur("ExpireDate")}
                value={values.ExpireDate}
                error={errors.ExpireDate}
                label="EXPIRE DATE"
                touched={touched.ExpireDate}
              />
            </View>
            <View style={styles.input}>
              <Input
                name="cvv"
                holder="Enter CVV"
                onChangeText={handleChange("cvv")}
                onBlur={handleBlur("cvv")}
                value={values.cvv}
                error={errors.cvv}
                label="CVV"
                touched={touched.cvv}
              />
            </View>
          </View>

          <CheckBox
            title={mobile ? "Checked" : "Save Card"}
            checked={mobile}
            onPress={() => {
              setMobile(!mobile);
            }}
            checkedColor="green"
            containerStyle={styles.checkbox}
            textStyle={{ color: "#FFC83D" }}
          />

          {loading ? (
            <ActivityIndicator color="red" size="large" />
          ) : (
            <CustomButton
              touchWidth="90%"
              style={{ marginTop: 20 }}
              onPress={handleSubmit}
            >
              Pay Now
            </CustomButton>
          )}
        </View>
      )}
    </Formik>
  );
};

export default CardDetails;

const styles = StyleSheet.create({
  innerContaier: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 20,
  },
  password: {
    width: "100%",
    alignItems: "center",
    position: "relative",
  },
  spaceBetween: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "70%",
    paddingHorizontal: 10,
    marginRight: 85,
  },
  subImgWithBg: {
    marginLeft: 10,
    marginTop: 8,
    width: 95,
    height: 50,
    borderRadius: 10,
  },
  input: {
    width: "74%",
  },
  checkbox: {
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
    borderColor: "#1B222A",
    borderWidth: 1,
    backgroundColor: "transparent",
    alignSelf: "flex-start",
  },
});
