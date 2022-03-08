import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { myQuiz } from "../../dummy-data/dashboard";

const MyQuiz = (props) => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <TouchableNativeFeedback
      onPress={() => {
        navigation.navigate("Instructions", {
          subject: item.subject,
        });
        // navigation.navigate("Result", {
        //   subject: item.subject,
        // });
      }}
    >
      <View style={{ ...styles.item, ...{ backgroundColor: item.color } }}>
        <Text style={styles.text}>{item.subject}</Text>

        <Text style={styles.text}>quiz {item.number}</Text>
      </View>
    </TouchableNativeFeedback>
  );
  return (
    <FlatList
      numColumns={2}
      data={myQuiz}
      keyExtractor={(Item) => Item.color}
      renderItem={renderItem}
    />
  );
};

export default MyQuiz;

const styles = StyleSheet.create({
  item: {
    height: 150,
    flex: 1,
    margin: 5,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
});
