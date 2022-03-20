import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from "react-native";
import { purchase } from "../../dummy-data/dashboard";

const renderItem = (itemData, navigation) => (
  <TouchableNativeFeedback onPress={() => navigation.navigate("Leadboard")}>
    <View
      style={{ ...styles.item, ...{ backgroundColor: itemData.item.color } }}
    >
      <View>
        <Text style={styles.title}>{itemData.item.title}</Text>
        <Text style={styles.title}>Subscription</Text>
      </View>
      <Text style={styles.title}>{itemData.item.cost}</Text>
    </View>
  </TouchableNativeFeedback>
);

const Purchase = ({ navigation }) => {
  return (
    <FlatList
      data={purchase}
      keyExtractor={(item) => item.title}
      renderItem={(itemData) => renderItem(itemData, navigation)}
    />
  );
};

export default Purchase;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    padding: 20,
    borderRadius: 6,
    paddingLeft: 30,
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
});
