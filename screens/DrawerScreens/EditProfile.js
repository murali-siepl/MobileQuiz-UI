import React from "react";
import { StyleSheet, Text, View, TouchableNativeFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";

const EditProfile = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>edit profile</Text>
      <Text>-----</Text>
      <Text
        style={styles.forget}
        onPress={() => {
          navigation.navigate("Ranking");
        }}
      >
        Ranking
      </Text>
      <Text>-----</Text>
      <Text
        style={styles.forget}
        onPress={() => {
          navigation.navigate("Leadboard");
        }}
      >
        Leadboard
      </Text>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({});
