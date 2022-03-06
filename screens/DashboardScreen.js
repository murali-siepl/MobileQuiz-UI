import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "./../components/shared/CustomHeaderButton";
import { Avatar } from "react-native-elements";
import Colors from "./../constants/Color";
import MyQuiz from "../components/DashboardComponents/MyQuiz";
import Achievement from "../components/DashboardComponents/Achievement";
import Purchase from "../components/DashboardComponents/Purchase";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { block } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
const Tab = createMaterialTopTabNavigator();

const DashboardScreen = (props) => {
  const [state, setState] = useState({
    quiz: true,
    achievement: false,
    purchase: false,
  });
  const navigation = useNavigation();

  const handleState = (type) => {
    setState((prev) => {
      return {
        quiz: false,
        achievement: false,
        purchase: false,
        [type]: true,
      };
    });
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#1a232a" }}>
      <View style={styles.profileInfo}>
        {/* <Avatar
          size={100}
          rounded
          onPress={() => console.log("Works!")}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS76AN3AAetgum2ydIslWPm1PyuwYL1Kw6lsw&usqp=CAU",
          }}
          containerStyle={styles.avatarContainer}
        /> */}
        <View style={styles.spaceBetween}>
          <Text style={styles.name}>Hello, Mohan</Text>
          <Text style={styles.level}
            onPress={() => {
              navigation.navigate("Offers");
            }}
          >Level 02</Text>
        </View>
        <Text style={styles.welcomeText}>Welcome To Quarts Quizz App</Text>
        <View style={styles.spaceBetween}>
          <View>
            <Text style={styles.scoreText}>Your Average score</Text>
            <View style={styles.scoreBlock}>
              <Text style={styles.score}>
                +45
              </Text>
              <Image
                style={styles.imgScore}
                source={require("../assets/images/feather-book.png")}
              />
            </View>
          </View>
          <Image
            style={styles.imgQuiz}
            source={require("../assets/images/quiz.png")}
          />
        </View>

      </View>

      <Tab.Navigator
        // screenOptions={{
        //   tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },
        //   tabBarContentContainerStyle: {
        //     backgroundColor: "#1a232a",
        //   },
        //   tabBarActiveTintColor: 'white',
        //   tabBarStyle: { backgroundColor: 'green' },
        // }}
        screenOptions={{
          tabBarActiveTintColor: 'white',
          tabBarLabelStyle: { fontSize: 10, fontWeight: "bold" },
          tabBarIndicatorStyle: { borderBottomWidth: 3, borderBottomColor: 'green' },
          tabBarStyle: {
            backgroundColor: 'transparent',
            shadowColor: '#1a232a',
            borderBottomWidth: 1,
            borderBottomColor: 'black',
            paddingBottom: 1,
            marginHorizontal: 15,
            marginVertical: 15,
          }
        }}
      >
        <Tab.Screen name="My Quiz" component={MyQuiz} />
        <Tab.Screen name="Achievement" component={Achievement} />
        <Tab.Screen name="My Purchase" component={Purchase} />
      </Tab.Navigator>
    </View>
  );
};

export default DashboardScreen;
export const DashboardnavigationOptions = (navData) => {
  return {
    headerTitle: "Welcome to Quiz App",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
          title="menu"
          color="white"
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
  avatarContainer: {
    padding: 4,
    backgroundColor: "white",
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
