import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DashboardScreen, {
  DashboardnavigationOptions,
} from "./../../screens/DashboardScreen";
import QuestionsScreen from "./../../screens/QuestionsScreen";
import Instructions from "./../../screens/Instructions";
import Colors from "./../../constants/Color";
import ResultScreen from "./../../screens/ResultScreen";
import {
  Feedback,
  FeedbacknavigationOptions,
  RateUs,
  RateUsnavigationOptions,
} from "../../screens/FeedbackScreens";

const defaultOptions = {
  headerStyle: {
    backgroundColor: Colors.darkGreen,
  },
  headerTintColor: "black",
};
const MainStackNavigator = createStackNavigator();
export default MainStack = () => (
  <MainStackNavigator.Navigator screenOptions={defaultOptions}>
    <MainStackNavigator.Screen
      name="Dashboard"
      component={DashboardScreen}
      options={DashboardnavigationOptions}
    />
    <MainStackNavigator.Screen
      name="Feedback"
      component={Feedback}
      options={FeedbacknavigationOptions}
    />

    <MainStackNavigator.Screen
      name="Rateus"
      component={RateUs}
      options={RateUsnavigationOptions}
    />

    <MainStackNavigator.Screen name="Questions" component={QuestionsScreen} />
    <MainStackNavigator.Screen name="Instructions" component={Instructions} />
    <MainStackNavigator.Screen name="Result" component={ResultScreen} />
  </MainStackNavigator.Navigator>
);
