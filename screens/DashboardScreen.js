import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "./../components/shared/CustomHeaderButton";
import MyQuiz from "../components/DashboardComponents/MyQuiz";
import Achievement from "../components/DashboardComponents/Achievement";
import Purchase from "../components/DashboardComponents/Purchase";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigation } from "@react-navigation/native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
const Tab = createMaterialTopTabNavigator();

const DashboardScreen = (props) => {
  const navigation = useNavigation();
  const { name } = useSelector((state) => state.auth);

  return (
    <View style={{ flex: 1, backgroundColor: "#1a232a", paddingBottom: 20 }}>
      <View style={styles.profileInfo}>
        <View style={styles.spaceBetween}>
          <Text style={styles.name}>Hello {name ? name : "Mohan"},</Text>
          {/* <Text
            style={styles.level}
            onPress={() => {
              navigation.navigate("Offers");
            }}
          >
            Level 02
          </Text> */}
        </View>
        <Text style={styles.welcomeText}>Welcome To Quarts Quiz App</Text>
        <View style={styles.spaceBetween}>
          <View>
            <Text style={styles.scoreText}>Your Average score</Text>
            <View style={styles.scoreBlock}>
              <Text style={styles.score}>+45</Text>
              <Image
                style={styles.imgScore}
                source={require("../assets/images/feather-book.png")}
              />
            </View>
          </View>
          <TouchableHighlight
            onPress={() => navigation.navigate("Feedback")}
          >
            <Image
              style={styles.imgQuiz}
              source={require("../assets/images/quiz.png")}
            />
          </TouchableHighlight>
        </View>
      </View>

      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "white",
          tabBarLabelStyle: { fontSize: 10, fontWeight: "bold" },
          tabBarIndicatorStyle: {
            borderBottomWidth: 3,
            borderBottomColor: "green",
          },
          tabBarStyle: {
            backgroundColor: "transparent",
            shadowColor: "#1a232a",
            borderBottomWidth: 1,
            borderBottomColor: "black",
            paddingBottom: 1,
            marginHorizontal: 15,
            marginVertical: 15,
          },
        }}
      >
        <Tab.Screen name="My Quiz" component={MyQuiz} />
        {/* <Tab.Screen name="Achievement" component={Achievement} /> */}
        <Tab.Screen name="My Purchase" component={Purchase} />
      </Tab.Navigator>
    </View>
  );
};

export default DashboardScreen;
export const DashboardnavigationOptions = (navData) => {
  return {
    headerTitle: "",
    headerLeft: () => (
      <Image source={require("../assets/images/Common/HeaderLogo.png")} />
    ),
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
const styles = StyleSheet.create({
  profileInfo: {
    justifyContent: "center",
    padding: 10,
    margin: 15,
    borderRadius: 8,
    alignItems: "flex-start",
    backgroundColor: "#23313C",
  },

  name: {
    fontSize: 16,
    color: "white",
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
    fontSize: 16,
    color: "white",
    marginVertical: 5,
    fontWeight: "bold",
    color: "#6ec43f",
    paddingRight: 5,
  },
  level: {
    fontSize: 16,
    color: "#6ec43f",
    marginVertical: 5,
    fontWeight: "bold",
  },
  welcomeText: {
    fontSize: 12,
    color: "#dad8d8",
    marginVertical: 5,
    textTransform: "capitalize",
    paddingBottom: 15,
  },
  scoreText: {
    fontSize: 12,
    color: "white",
    marginVertical: 5,
    textTransform: "capitalize",
    fontWeight: "bold",
  },
  types: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    padding: 10,
    paddingHorizontal: 5,
    fontSize: 18,
    backgroundColor: "rgba(0,0,0,0.1)",
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  typeContent: {
    margin: 10,
    flex: 1,
  },
  spaceBetween: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
  },
  imgScore: {
    width: 15,
    height: 15,
  },
  imgQuiz: {
    width: 52,
    height: 52,
  },
});
