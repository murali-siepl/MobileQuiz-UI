import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableNativeFeedback, View, Image, ImageBackground } from "react-native";
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
      }}
    >
      <View style={{ ...styles.item,  }}>
      {/* ...{ backgroundColor: item.color } */}
        {/* <Text style={styles.text}>{item.subject}</Text>
        <Text style={styles.text}>quiz {item.number}</Text> */}
        <ImageBackground
          style={styles.gbQuiz}
          imageStyle={{ borderRadius: 10}}
          source={item.img}
        >
          <Text style={styles.text}>{item.subject}</Text>
          <Image
           style={styles.rightIcon}
            source={require("../../assets/images/right-icon.png")}
          />
        </ImageBackground>
      </View>
    </TouchableNativeFeedback>
  );
  return (
    <FlatList
      style={{backgroundColor: "#1a232a", padding: 10}}
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 8,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    margin: 10,
    width: 0,
    flexGrow: 1,
    flex: 1,
  },
  gbQuiz: {
    width: 168,
    height: 120,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
  },
  rightIcon: {
    marginTop: 18,
    marginRight: 10,
    width: 14,
    height: 14,
  },
});
