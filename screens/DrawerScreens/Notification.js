import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Notification, NotificationNavigationOptions } from "./../../screens/NotificationScreen";
import Colors from "./../../constants/Color";

const defaultOptions = {
    headerStyle: {
        backgroundColor: Colors.darkGreen,
    },
    headerTintColor: "black",
};
const NotificationStackNavigator = createStackNavigator();
export default NotificationStack = () => (
    <NotificationStackNavigator.Navigator screenOptions={defaultOptions}>
        <NotificationStackNavigator.Screen
            name="Notificationhh"
            component={Notification}
            options={NotificationNavigationOptions}
        />

    </NotificationStackNavigator.Navigator>
);