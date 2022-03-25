import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DashboardnavigationOptions } from "./../../screens/DashboardScreen";
import Welcome from "../../components/Welcome";
import Colors from "./../../constants/Color";

const defaultOptions = {
  headerStyle: {
    backgroundColor: Colors.darkGreen,
  },
  headerTintColor: "black",
};
const AboutStackNavigator = createStackNavigator();
export default AboutStack = () => (
  <AboutStackNavigator.Navigator screenOptions={defaultOptions}>

    <AboutStackNavigator.Screen
      name="About"
      component={Welcome}
      options={DashboardnavigationOptions} />

  </AboutStackNavigator.Navigator>
);
