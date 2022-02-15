import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignScreen from "../../screens/nonAuthScreens/SignScreen";
import StartScreen from "../../screens/nonAuthScreens/StartScreen";
import Reset from "./../../components/SignComponents/Reset";
import Forget from "./../../components/SignComponents/Forget";
import PrivacyPolicy from "./../../screens/nonAuthScreens/PrivacyPolicy";
import TermsAndServices from "./../../screens/nonAuthScreens/TermsAndServices";
import SlidesScreen from "./../../screens/nonAuthScreens/SlidesScreen";
import Colors from "./../../constants/Color";

const NonAuthStackNavigator = createStackNavigator();

const defaultOptions = {
  headerStyle: {
    backgroundColor: Colors.darkBlack,
  },
  headerTintColor: "white",
};
export default NonAuthStack = () => (
  <NonAuthStackNavigator.Navigator screenOptions={defaultOptions}>
    <NonAuthStackNavigator.Screen
      name="Start"
      component={StartScreen}
      options={{ headerShown: false }}
    />
    <NonAuthStackNavigator.Screen name="SignIn" component={SignScreen} />
    <NonAuthStackNavigator.Screen
      name="Slides"
      component={SlidesScreen}
      options={{ headerShown: false }}
    />
    <NonAuthStackNavigator.Screen
      name="Forgot"
      component={Forget}
      options={{ headerTitle: "Forget Password" }}
    />
    <NonAuthStackNavigator.Screen
      name="Reset"
      component={Reset}
      options={{ headerTitle: "Reset Password" }}
    />
    <NonAuthStackNavigator.Screen
      name="PrivacyPolicy"
      component={PrivacyPolicy}
      options={{ headerShown: false }}
    />
    <NonAuthStackNavigator.Screen
      name="TermsOfService"
      component={TermsAndServices}
      options={{ headerShown: false }}
    />
  </NonAuthStackNavigator.Navigator>
);
