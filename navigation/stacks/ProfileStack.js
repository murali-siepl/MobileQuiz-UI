import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DashboardnavigationOptions } from "./../../screens/DashboardScreen";
import Profile from "../../screens/ProfileScreen/Profile";
import Colors from "./../../constants/Color";

const defaultOptions = {
  headerStyle: {
    backgroundColor: Colors.darkGreen,
  },
  headerTintColor: "black",
};
const AboutStackNavigator = createStackNavigator();
export default ProfileStack = () => (
  <AboutStackNavigator.Navigator screenOptions={defaultOptions}>

    <AboutStackNavigator.Screen
      name="Profile"
      component={Profile}
      options={DashboardnavigationOptions} />

  </AboutStackNavigator.Navigator>
);
