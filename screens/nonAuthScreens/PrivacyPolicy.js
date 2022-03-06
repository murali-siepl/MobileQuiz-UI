import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import Heading from "./../../components/shared/Heading";
import { globalStyles } from "./../../constants/GlobalStyles";

import CustomButton from "./../../components/shared/Button";

const PrivacyPolicy = (props) => {
  return (
    <View style={{ ...globalStyles.container, ...styles.container }}>
      <Heading>Our Privacy Policy</Heading>
      <View style={styles.content}>
        <ScrollView>
          <Text style={styles.contentText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is
          </Text>
        </ScrollView>
      </View>

      <CustomButton
        onPress={() => {
          props.navigation.goBack();
        }}
        style={{ marginVertical: 20 }}
        touchWidth="30%"
      >
        Back
      </CustomButton>
    </View>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#d9d9d9",
    padding: 20,
  },
  content: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "white",
    height: Dimensions.get("window").height / 1.5,
  },
  contentText: { fontSize: 16 },
});
