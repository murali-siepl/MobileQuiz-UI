import React from "react";

import { DrawerHomeLabel } from "./DrawerLabel";
import EditProfile from "./../screens/DrawerScreens/EditProfile";
import {
  AntDesign,
  Entypo,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import MyAccount from "./../screens/DrawerScreens/MyAccount";
import MyRewards from "./../screens/DrawerScreens/MyRewards";
import Notification from "./../screens/DrawerScreens/Notification";
import GameRules from "./../screens/DrawerScreens/GameRules";
import Settings from "./../screens/DrawerScreens/Settings";
import CustomarCare from "./../screens/DrawerScreens/CustomarCare";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import MainStack from "./stacks/MainStack";
import { useDispatch } from "react-redux";
import { logout } from "./../store/actions/Authenticate";

const drawerDefaultStyles = {
  headerShown: false,
  drawerContentStyle: {
    backgroundColor: "rgba(225, 220, 220, 1)",
  },
  drawerLabelStyle: {
    fontSize: 17,
  },
  drawerItemStyle: {
    borderBottomColor: "#F2F1F1",
    borderBottomWidth: 1,
  },
};

const DrawerStackNavigator = createDrawerNavigator();

const DrawerStack = () => {
  const dispatch = useDispatch();
  return (
    <DrawerStackNavigator.Navigator
      screenOptions={drawerDefaultStyles}
      drawerContent={(props) => (
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem
            label="Logout"
            labelStyle={{ fontSize: 17 }}
            icon={(config) => (
              <Feather name="external-link" size={26} color={config.color} />
            )}
            onPress={() => {
              dispatch(logout());
            }}
          />
        </DrawerContentScrollView>
      )}
    >
      <DrawerStackNavigator.Screen
        name="Home"
        component={MainStack}
        options={{
          drawerItemStyle: {
            backgroundColor: "#A9E4D7",
          },
          drawerLabel: DrawerHomeLabel,
        }}
      />
      <DrawerStackNavigator.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          title: "Edit Profile",
          drawerIcon: (config) => (
            <Entypo name="edit" size={26} color={config.color} />
          ),
        }}
      />
      <DrawerStackNavigator.Screen
        name="MyAccount"
        component={MyAccount}
        options={{
          title: "My account",
          drawerIcon: (config) => (
            <MaterialCommunityIcons
              name="account-circle"
              size={26}
              color={config.color}
            />
          ),
        }}
      />
      <DrawerStackNavigator.Screen
        name="MyRewards"
        component={MyRewards}
        options={{
          title: "My rewards",
          drawerIcon: (config) => (
            <Ionicons
              name="md-gift-outline"
              size={26}
              color={config.tintColor}
            />
          ),
        }}
      />
      <DrawerStackNavigator.Screen
        name="Notification"
        component={Notification}
        options={{
          title: "Notification",
          drawerIcon: (config) => (
            <Entypo name="edit" size={26} color={config.color} />
          ),
        }}
      />
      <DrawerStackNavigator.Screen
        name="GameRules"
        component={GameRules}
        options={{
          title: "Game rules",
          drawerIcon: (config) => (
            <Ionicons
              name="warning-outline"
              size={26}
              color={config.tintColor}
            />
          ),
        }}
      />
      <DrawerStackNavigator.Screen
        name="Settings"
        component={Settings}
        options={{
          title: "Settings",
          drawerIcon: (config) => (
            <Ionicons
              name="ios-settings-sharp"
              size={26}
              color={config.tintColor}
            />
          ),
        }}
      />
      <DrawerStackNavigator.Screen
        name="Customar"
        component={CustomarCare}
        options={{
          title: " Customar care",
          drawerIcon: (config) => (
            <AntDesign
              name="customerservice"
              size={26}
              color={config.tintColor}
            />
          ),
        }}
      />
    </DrawerStackNavigator.Navigator>
  );
};
export default DrawerStack;
