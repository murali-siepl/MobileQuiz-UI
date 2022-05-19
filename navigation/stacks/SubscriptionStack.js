import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DashboardnavigationOptions } from "./../../screens/DashboardScreen";
import { Subscription } from "./../../screens/SubscriptionScreen";
import { CartScreen } from "./../../screens/SubscriptionScreen/CartScreen";
import { CheckoutScreen } from "./../../screens/SubscriptionScreen/CheckoutScreen";
import Colors from "./../../constants/Color";

const defaultOptions = {
  headerStyle: {
    backgroundColor: Colors.darkGreen,
  },
  headerTintColor: "black",
};
const SubscriptionStackNavigator = createStackNavigator();
export default SubscriptionStack = () => (
  <SubscriptionStackNavigator.Navigator screenOptions={defaultOptions}>

    <SubscriptionStackNavigator.Screen
      name="Subscription"
      component={Subscription}
      options={DashboardnavigationOptions}
    />

    <SubscriptionStackNavigator.Screen name="Cart" component={CartScreen} />
    <SubscriptionStackNavigator.Screen name="Checkout" component={CheckoutScreen} />

  </SubscriptionStackNavigator.Navigator>
);
