import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DashboardnavigationOptions } from "./../../screens/DashboardScreen";
import FaqAndContact from "./../../components/DashboardComponents/FaqAndContact";
import Colors from "./../../constants/Color";

const defaultOptions = {
  headerStyle: {
    backgroundColor: Colors.darkGreen,
  },
  headerTintColor: "black",
};
const HelpFaqStackNavigator = createStackNavigator();
export default HelpFaqStack = () => (
  <HelpFaqStackNavigator.Navigator screenOptions={defaultOptions}>

    <HelpFaqStackNavigator.Screen
      name="Dashboard"
      component={FaqAndContact}
      options={DashboardnavigationOptions}
    />
    
  </HelpFaqStackNavigator.Navigator>
);
