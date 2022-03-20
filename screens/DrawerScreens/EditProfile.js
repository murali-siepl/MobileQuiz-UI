import React from "react";
import { StyleSheet, Text, View, TouchableNativeFeedback } from "react-native";
import { globalStyles } from "./../../constants/GlobalStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

const EditProfile = ({ navigation }) => {
  return (
    <View style={{ ...globalStyles.container }}>
      <Text>edit profile</Text>
      <Text>-----</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Ranking");
        }}
      >
        <Text style={styles.forget}> Ranking</Text>
      </TouchableOpacity>

      <Text>-----</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Leadboard");
        }}
      >
        <Text style={styles.forget}>Leadboard</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  forget: {
    marginVertical: 50,
  },
});
