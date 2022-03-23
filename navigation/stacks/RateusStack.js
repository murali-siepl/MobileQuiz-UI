import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DashboardnavigationOptions } from "./../../screens/DashboardScreen";
import { RateUs } from "../../screens/FeedbackScreens";
import Colors from "./../../constants/Color";

const defaultOptions = {
    headerStyle: {
        backgroundColor: Colors.darkGreen,
    },
    headerTintColor: "black",
};
const RateusStackNavigator = createStackNavigator();
export default RateusStack = () => (
    <RateusStackNavigator.Navigator screenOptions={defaultOptions}>

        <RateusStackNavigator.Screen
            name="Rateus"
            component={RateUs}
            options={DashboardnavigationOptions}
        />

    </RateusStackNavigator.Navigator>
);
