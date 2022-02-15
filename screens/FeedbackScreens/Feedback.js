import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomHeaderButton from "./../../components/shared/CustomHeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import Input from "./Input";
import Heading from "./../../components/shared/Heading";
import { Formik } from "formik";
import { feedbackValidationSchema } from "../../validationSchema";
import CustomButton from "./../../components/shared/Button";

export const Feedback = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Heading style={{ color: "black", fontSize: 25 }}>Feedback</Heading>
      <Formik
        initialValues={{
          name: "",
          email: "",
          subject: "",
          message: "",
        }}
        validationSchema={feedbackValidationSchema}
        onSubmit={(values) => {}}
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
          <View style={{ width: "100%", alignItems: "center", marginTop: 20 }}>
            <View style={{ width: "80%" }}>
              <Input
                placeholder="Name"
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
                error={errors.name}
                touched={touched.name}
              />
              <Input
                placeholder="Email"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
                error={errors.email}
                touched={touched.email}
              />
              <Input
                placeholder="Subject"
                onChangeText={handleChange("subject")}
                onBlur={handleBlur("subject")}
                value={values.subject}
                error={errors.subject}
                touched={touched.subject}
              />
              <Input
                placeholder="Message"
                onChangeText={handleChange("message")}
                onBlur={handleBlur("message")}
                value={values.message}
                error={errors.message}
                touched={touched.message}
                numberOfLines={4}
                multiLine={true}
                textAlignVertical="top"
              />
            </View>
            <View style={styles.buttons}>
              <CustomButton
                onPress={() => {
                  navigation.navigate("Dashboard");
                }}
                touchWidth="30%"
                style={{ paddingHorizontal: 10 }}
              >
                Menu
              </CustomButton>
              <CustomButton
                onPress={handleSubmit}
                touchWidth="30%"
                button={{ fontSize: 15 }}
                style={{ paddingHorizontal: 10 }}
              >
                Submit
              </CustomButton>
              <CustomButton
                onPress={() => {
                  navigation.navigate("Slides");
                }}
                touchWidth="30%"
                button={{ fontSize: 15 }}
                style={{ paddingHorizontal: 10 }}
              >
                Back
              </CustomButton>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    marginVertical: 50,
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
  },
});

export const FeedbacknavigationOptions = (navData) => {
  return {
    headerTitle: "Feedback",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
          title="menu"
          color="white"
        />
      </HeaderButtons>
    ),
  };
};
