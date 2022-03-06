import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "./../components/shared/CustomHeaderButton";
import { Avatar } from "react-native-elements";
import MyQuiz from "../components/DashboardComponents/MyQuiz";
import Achievement from "../components/DashboardComponents/Achievement";
import Purchase from "../components/DashboardComponents/Purchase";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSelector } from "react-redux";

const Tab = createMaterialTopTabNavigator();

const DashboardScreen = (props) => {
  const { name } = useSelector((state) => state.auth);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.avatar}>
        <Avatar
          size={100}
          rounded
          onPress={() => console.log("Works!")}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS76AN3AAetgum2ydIslWPm1PyuwYL1Kw6lsw&usqp=CAU",
          }}
          containerStyle={styles.avatarContainer}
        />
        <Text style={styles.name}>{name}</Text>
      </View>

      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },
          tabBarContentContainerStyle: {
            backgroundColor: "rgba(0,0,0,0.1)",
          },
        }}
      >
        <Tab.Screen name="Quiz" component={MyQuiz} />
        <Tab.Screen name="Achievements" component={Achievement} />
        <Tab.Screen name="Purchase" component={Purchase} />
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
  avatar: {
    justifyContent: "center",
    paddingTop: 5,
    alignItems: "center",
    backgroundColor: "#A9E4D7",
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
});
