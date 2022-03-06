import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from "react-native";
import { achiement } from "../../dummy-data/dashboard";

const renderItem = (itemData, navigation) => (
  <TouchableNativeFeedback
    onPress={() => {
      navigation.navigate("Feedback");
    }}
  >
    <View
      style={{ ...styles.item, ...{ backgroundColor: itemData.item.color } }}
    >
      <Text style={styles.title}>{itemData.item.title}</Text>
      <View style={styles.data}>
        <View style={styles.rating}>
          {new Array(itemData.item.rating).fill("").map((_, i) => (
            <Ionicons
              style={styles.icon}
              name="ios-star"
              color="orange"
              key={i}
              size={29}
            />
          ))}
        </View>
        <Text style={styles.score}>+{itemData.item.score}</Text>
      </View>
    </View>
  </TouchableNativeFeedback>
);

const Achievement = ({ navigation }) => {
  return (
    <FlatList
      data={achiement}
      keyExtractor={(item) => item.title}
      renderItem={(itemData) => renderItem(itemData, navigation)}
    />
  );
};

export default Achievement;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    padding: 20,
    borderRadius: 6,
    paddingLeft: 30,
    marginVertical: 5,
  },
  title: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  data: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rating: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    marginRight: 8,
  },
  score: {
    color: "orange",
    fontSize: 23,
    fontWeight: "bold",
  },
});
