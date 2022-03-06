import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  LogBox,
} from "react-native";
import React, { useEffect, useState } from "react";
import CustomHeaderButton from "./../../components/shared/CustomHeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import Input, { MessageInput } from "./Input";
import Heading from "./../../components/shared/Heading";
import { Formik } from "formik";
import { feedbackValidationSchema } from "../../validationSchema";
import CustomButton from "./../../components/shared/Button";
import Colors from "./../../constants/Color";
import Dropdown from "./../../components/shared/Dropdown";

export const Feedback = ({ navigation }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Maths", value: "Maths" },
    { label: "GK", value: "GK" },
    { label: "Science", value: "Science" },
    { label: "Arts", value: "Arts" },
  ]);
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          subject: "",
          message: "",
        }}
        validationSchema={feedbackValidationSchema}
        onSubmit={(values) => {}}
        style={{ width: "100%", flex: 1 }}
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
          <View style={styles.form}>
            <ScrollView
              style={{ width: "100%" }}
              contentContainerStyle={styles.scrollView}
              showsVerticalScrollIndicator={false}
            >
              <Heading
                style={{
                  color: "white",
                  fontSize: 22,
                  fontWeight: "700",
                  marginTop: 43,
                }}
              >
                What we can imporve?
              </Heading>
              <Text style={styles.text}>
                Please share your feedback with us.
              </Text>
              <Image
                source={require("../../assets/images/Feedback/thump.png")}
                style={styles.image}
              />
              <View style={{ width: "100%" }}>
                <Input
                  placeholder="Write your name"
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  value={values.name}
                  error={errors.name}
                  touched={touched.name}
                  label="Name"
                />
                <Input
                  placeholder="Write your email"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  keyboardType="email-address"
                  error={errors.email}
                  touched={touched.email}
                  label="Email"
                />
                {/* <Input
                  placeholder="Select Subject"
                  onChangeText={handleChange("subject")}
                  onBlur={handleBlur("subject")}
                  value={values.subject}
                  error={errors.subject}
                  touched={touched.subject}
                  label="Subject"
                /> */}
                <Dropdown
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                  holder="Subject"
                  onChangeText={handleChange("subject")}
                  label="Subject"
                  error={errors.subject}
                />
                <MessageInput
                  placeholder="Lets us know your response"
                  onChangeText={handleChange("message")}
                  onBlur={handleBlur("message")}
                  value={values.message}
                  error={errors.message}
                  touched={touched.message}
                  numberOfLines={4}
                  multiLine={true}
                  textAlignVertical="top"
                  label="Message"
                  setFieldValue={setFieldValue}
                />
              </View>
              <View style={styles.buttons}>
                <CustomButton
                  onPress={handleSubmit}
                  touchWidth="100%"
                  button={{ fontSize: 15 }}
                  style={{
                    paddingHorizontal: 10,
                    borderRadius: 5,
                    backgroundColor: Colors.darkGreen,
                  }}
                >
                  Submit
                </CustomButton>
                <CustomButton
                  onPress={() => {
                    navigation.navigate("Dashboard");
                  }}
                  touchWidth="100%"
                  style={{
                    paddingHorizontal: 10,
                    marginTop: 13.4,
                    backgroundColor: "transparent",
                    borderColor: "#50C700",
                    borderWidth: 1,
                  }}
                  button={{ color: "#50C700", fontWeight: "500" }}
                >
                  <Image
                    source={require("../../assets/images/Feedback/arrow.png")}
                    style={{ width: 14, height: 14 }}
                  />
                  {" Back To Home"}
                </CustomButton>
              </View>
            </ScrollView>
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
    backgroundColor: Colors.darkBlack,
    paddingVertical: 10,
    paddingHorizontal: 18,
    width: "100%",
  },

  form: {
    marginTop: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#2E4150",
    width: "100%",
    flex: 1,
    paddingHorizontal: 20,
  },
  scrollView: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#999999",
    fontSize: 14,
    marginVertical: 5,
  },
  image: {
    width: 72,
    height: 72,
    marginTop: 14,
  },
  buttons: {
    marginVertical: 10,
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 43,
  },
});

export const FeedbacknavigationOptions = (navData) => {
  return {
    headerTitle: "Feedback",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
          title="menu"
          color="black"
        />
      </HeaderButtons>
    ),
  };
};
