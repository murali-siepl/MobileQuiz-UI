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
} from "../../screens/FeedbackScreens";
import Leadboard, {
  LeaderBoardnavigationOptions,
} from "../../components/SettingsComponents/Leadboard";
import Ranking from "../../components/SettingsComponents/Ranking";
import Offers from "../../components/Offers";
import Welcome from "../../components/Welcome";
import FaqAndContact from "../../components/DashboardComponents/FaqAndContact";

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
      name="Questions"
      component={QuestionsScreen}
      options={{ headerTitle: "Questionaire" }}
    />
    <MainStackNavigator.Screen
      name="Instructions"
      component={Instructions}
      options={{ headerTitle: "Welcome To The App" }}
    />
    <MainStackNavigator.Screen name="Result" component={ResultScreen} />
    <MainStackNavigator.Screen name="FaqAndContact" component={FaqAndContact} />
    <MainStackNavigator.Screen name="Overview" component={Ranking} />
    <MainStackNavigator.Screen name="Quiz Categories" component={Offers} />
    <MainStackNavigator.Screen name="About" component={Welcome} />

  </MainStackNavigator.Navigator>
);
