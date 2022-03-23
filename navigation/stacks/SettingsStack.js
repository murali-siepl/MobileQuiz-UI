import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DashboardnavigationOptions } from "./../../screens/DashboardScreen";
import { Settings } from "./../../screens/SettingsScreen";
import Colors from "./../../constants/Color";

const defaultOptions = {
  headerStyle: {
    backgroundColor: Colors.darkGreen,
  },
  headerTintColor: "black",
};
const SettingsStackNavigator = createStackNavigator();
export default SettingsStack = () => (
  <SettingsStackNavigator.Navigator screenOptions={defaultOptions}>

    <SettingsStackNavigator.Screen
      name="Dashboard"
      component={Settings}
      options={DashboardnavigationOptions}
    />
    
  </SettingsStackNavigator.Navigator>
);
