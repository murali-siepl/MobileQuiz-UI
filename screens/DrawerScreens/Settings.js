
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Settings, SettingsNavigationOptions } from "./../../screens/SettingsScreen";
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
            name="Settings"
            component={Settings}
            options={SettingsNavigationOptions}
        />

    </SettingsStackNavigator.Navigator>
);
