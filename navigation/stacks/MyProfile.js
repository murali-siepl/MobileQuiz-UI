import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DashboardnavigationOptions } from "./../../screens/DashboardScreen";
import { MyProfile } from "./../../screens/MyProfileScreen";
import Colors from "./../../constants/Color";

const defaultOptions = {
  headerStyle: {
    backgroundColor: Colors.darkGreen,
  },
  headerTintColor: "black",
};
const MyProfileStackNavigator = createStackNavigator();
export default MyProfileStack = () => (
  <MyProfileStackNavigator.Navigator screenOptions={defaultOptions}>

    <MyProfileStackNavigator.Screen
      name="Dashboard"
      component={MyProfile}
      options={DashboardnavigationOptions}
    />
    
  </MyProfileStackNavigator.Navigator>
);
