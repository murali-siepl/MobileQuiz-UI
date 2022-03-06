import React from "react";
import { StyleSheet, Text, View, ScrollView, Image, TouchableNativeFeedback, ImageBackground } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { ranking } from "../../dummy-data/ranking";

const Ranking = () => {

  const renderItem = ({ item }) => (
    <TouchableNativeFeedback
      key={item.subject}
      onPress={() => {
        navigation.navigate("Instructions");
      }}
    >
      <View style={{ ...styles.item, }} style={styles.gridBoxes}>
        <ImageBackground
          style={styles.gbQuiz}
          imageStyle={{ borderRadius: 10 }}
          source={item.img}
        >
          <Text style={styles.number}>{item.number}</Text>
          <Text style={styles.text}>{item.subject}</Text>
        </ImageBackground>
      </View>
    </TouchableNativeFeedback>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#1a232a" }}>
      <ScrollView >
        <View style={styles.profileInfo}>
          <View style={styles.spaceBetween}>
            <Text style={styles.name}>Hello, Mohan</Text>
            <Text style={styles.level}
              onPress={() => {
                navigation.navigate("Offers");
              }}
            >Level 02</Text>
          </View>
          <Text style={styles.welcomeText}>let's Start Learning</Text>
          <View style={styles.spaceBetween}>
            <View>
              <FlatList
                style={{ padding: 0, margin: 0 }}
                numColumns={2}
                data={ranking}
                keyExtractor={(Item) => Item.subject}
                renderItem={renderItem}
              />
            </View>
          </View>
        </View>

        <View style={styles.profileInfo}>
          <View style={Object.assign({}, styles.spaceBetween, { marginBottom: 15 })}>
            <Text style={styles.name}>Your Highest Score</Text>
            <Text style={styles.name}>Date: 12-01-21</Text>
          </View>
          <View style={styles.spaceBetween}>
            <View style={styles.spaceBetweenH}>
              <Text style={styles.headName}>99pts</Text>
              <Text style={styles.name}>Best Score</Text>
            </View>
            <View style={styles.spaceBetweenH}>
              <Text style={styles.headName}>2nd</Text>
              <Text style={styles.name}>Position</Text>
            </View>
            <View style={styles.spaceBetweenH}>
              <Text style={styles.headName}>3:22min</Text>
              <Text style={styles.name}>Time taken</Text>
            </View>
          </View>
        </View>

        <View style={styles.spaceBetween}>
          <View style={styles.spaceBetweenH}>
            <View style={styles.scoreAndTime}>
              <Text style={styles.name}>Your Average Score</Text>
              <View style={styles.scoreBlock}>
                <Text style={styles.score}>
                  +45
                </Text>
                <Image
                  style={styles.imgScore}
                  source={require("../../assets/images/feather-book.png")}
                />
              </View>
            </View>
          </View>

          <View style={styles.spaceBetweenH}>
            <View style={styles.scoreAndTime}>
              <Text style={styles.name}>Your Average Time</Text>
              <View style={styles.scoreBlock}>
                <Text style={styles.score}>
                  4:34 min
                </Text>
                <Image
                  style={styles.imgScore}
                  source={require("../../assets/images/feather-book.png")}
                />
              </View>
            </View>
          </View>
        </View>

      </ScrollView>
    </View>
  );
};

export default Ranking;

const styles = StyleSheet.create({
  profileInfo: {
    justifyContent: "center",
    padding: 10,
    margin: 15,
    borderRadius: 8,
    alignItems: "flex-start",
    backgroundColor: "#23313C",
    borderColor: "#2E4150",
    borderWidth: 2,
  },
  scoreAndTime: {
    flexDirection: "column",
    justifyContent: 'space-between',
    paddingVertical: 15,
    margin: 15,
    borderRadius: 8,
    alignItems: "flex-start",
    backgroundColor: "#23313C",
    borderColor: "#2E4150",
    borderWidth: 2,
  },
  gridBoxes: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingRight: 15,
    paddingBottom: 15,
    marginRight: 0,
    borderRadius: 8,
    alignItems: "flex-start",
  },
  headName: {
    fontSize: 24,
    color: "green",
    marginVertical: 5,
    fontWeight: "bold",
  },
  name: {
    fontSize: 16,
    color: "white",
    marginVertical: 5,
    fontWeight: "bold",
  },
  level: {
    fontSize: 16,
    color: "#6ec43f",
    marginVertical: 5,
    fontWeight: "bold",
  },
  scoreBlock: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  score: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6ec43f",
    marginRight: 5,
    display: "flex",
    justifyContent: "flex-start",
  },
  imgScore: {
    width: 25,
    height: 25,
  },
  welcomeText: {
    fontSize: 12,
    color: "#dad8d8",
    marginVertical: 5,
    textTransform: "capitalize",
    paddingBottom: 15,
  },
  text: {
    position: 'absolute',
    paddingLeft: 8,
    bottom: 12,
    fontSize: 12,
    backgroundColor: "rgba(0,0,0,0.1)",
    fontWeight: "bold",
    flex: 1,
    textAlign: "left",
    color: "white",
  },
  spaceBetween: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
  },
  spaceBetweenH: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  gbQuiz: {
    width: 160,
    height: 100,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "row",
  },
});
