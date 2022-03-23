import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "./../../constants/Color";
import Leadboard, {
  LeaderBoardnavigationOptions,
} from "../../components/SettingsComponents/Leadboard";

const defaultOptions = {
  headerStyle: {
    backgroundColor: Colors.darkGreen,
  },
  headerTintColor: "black",
};
const LeadboardStackNavigator = createStackNavigator();
export default LeadboardStack = () => (
  <LeadboardStackNavigator.Navigator screenOptions={defaultOptions}>

    <LeadboardStackNavigator.Screen
      name="Leadboard"
      component={Leadboard}
      options={LeaderBoardnavigationOptions}
    />

  </LeadboardStackNavigator.Navigator>
);
