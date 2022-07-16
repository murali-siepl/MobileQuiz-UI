import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DashboardnavigationOptions } from "./../../screens/DashboardScreen";
import {Feedback} from "../../screens/FeedbackScreens";
import Colors from "./../../constants/Color";

const defaultOptions = {
  headerStyle: {
    backgroundColor: Colors.darkGreen,
  },
  headerTintColor: "black",
};
const AboutStackNavigator = createStackNavigator();
export default FeedbackStack = () => (
  <AboutStackNavigator.Navigator screenOptions={defaultOptions}>

    <AboutStackNavigator.Screen
      name="Feedback"
      component={Feedback}
      options={DashboardnavigationOptions} />

  </AboutStackNavigator.Navigator>
);
