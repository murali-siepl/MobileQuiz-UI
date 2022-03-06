import React from "react";
import DashboardScreen, {
  DashboardnavigationOptions,
} from "./../screens/DashboardScreen";
import Instructions from "./../screens/Instructions";
import QuestionsScreen from "./../screens/QuestionsScreen";
import Offers from "./../screens/Offers";
import Colors from "./../constants/Color";

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
import GameRules from "./../screens/DrawerScreens/GameRules";
import Settings from "./../screens/DrawerScreens/Settings";
import CustomarCare from "./../screens/DrawerScreens/CustomarCare";
import Logout from "./../screens/DrawerScreens/Logout";

import Leadboard from "../components/SettingsComponents/Leadboard";
import Ranking from "../components/SettingsComponents/Ranking";

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text, View } from "react-native";

const defaultOptions = {
  headerStyle: {
    backgroundColor: Colors.blue,
  },
  headerTintColor: "white",
};

const drawerDefaultStyles = {
  headerShown: false,
  drawerContentStyle: {
    backgroundColor: "rgba(225, 220, 220, 1)",
  },
  drawerLabelStyle: {
    fontSize: 17,
  },
  drawerItemStyle: {
    borderBottomColor: "white",
    borderBottomWidth: 1,
  },
};
const MainStackNavigator = createStackNavigator();
const MainStack = () => (
  <MainStackNavigator.Navigator screenOptions={defaultOptions}>
    <MainStackNavigator.Screen
      name="Dashboard"
      component={DashboardScreen}
      options={DashboardnavigationOptions}
    />
    <MainStackNavigator.Screen name="Questions" component={QuestionsScreen} />
    <MainStackNavigator.Screen name="Instructions" component={Instructions} />
    <MainStackNavigator.Screen name="Offers" component={Offers} />

    <MainStackNavigator.Screen name="Ranking" component={Ranking} />
    <MainStackNavigator.Screen name="Leadboard" component={Leadboard} />

  </MainStackNavigator.Navigator>
);

const DrawerStackNavigator = createDrawerNavigator();

const DrawerStack = () => (
  <DrawerStackNavigator.Navigator screenOptions={drawerDefaultStyles}>
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
          <Ionicons name="md-gift-outline" size={26} color={config.tintColor} />
        ),
      }}
    />
    <DrawerStackNavigator.Screen
      name="GameRules"
      component={GameRules}
      options={{
        title: "Game rules",
        drawerIcon: (config) => (
          <Ionicons name="warning-outline" size={26} color={config.tintColor} />
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
    <DrawerStackNavigator.Screen
      name="Logout"
      component={Logout}
      options={{
        title: "Logout",
        drawerIcon: (config) => (
          <Feather name="external-link" size={26} color={config.tintColor} />
        ),
      }}
    />
  </DrawerStackNavigator.Navigator>
);
export default DrawerStack;

// const DrawerStack = createDrawerNavigator(
//   {
//     Home: {
//       screen: MainStack,
//       navigationOptions: {
//         drawerLabel: DrawerHomeLabel,
//       },
//     },
//     EditProfile: {
//       screen: EditProfile,
//       navigationOptions: {
//         drawerIcon: (config) => (
//           <Entypo name="edit" size={26} color={config.tintColor} />
//         ),
//       },
//     },
//     MyAccount: {
//       screen: MyAccount,
//       navigationOptions: {
//         title: "My account",
//         drawerIcon: (config) => (
//           <MaterialCommunityIcons
//             name="account-circle"
//             size={26}
//             color={config.tintColor}
//           />
//         ),
//       },
//     },
//     MyRewards: {
//       screen: MyRewards,
//       navigationOptions: {
//         title: "My rewards",
//         drawerIcon: (config) => (
//           <Ionicons name="md-gift-outline" size={26} color={config.tintColor} />
//         ),
//       },
//     },
//     GameRules: {
//       screen: GameRules,
//       navigationOptions: {
//         title: "Game rules",
//         drawerIcon: (config) => (
//           <Ionicons name="warning-outline" size={26} color={config.tintColor} />
//         ),
//       },
//     },
//     Settings: {
//       screen: Settings,
//       navigationOptions: {
//         title: "Settings",
//         drawerIcon: (config) => (
//           <Ionicons
//             name="ios-settings-sharp"
//             size={26}
//             color={config.tintColor}
//           />
//         ),
//       },
//     },
//     Customer: {
//       screen: CustomarCare,
//       navigationOptions: {
//         title: " Customar care",
//         drawerIcon: (config) => (
//           <AntDesign
//             name="customerservice"
//             size={26}
//             color={config.tintColor}
//           />
//         ),
//       },
//     },
//     logout: {
//       screen: Logout,
//       navigationOptions: {
//         title: "Logout",
//         drawerIcon: (config) => (
//           <Feather name="external-link" size={26} color={config.tintColor} />
//         ),
//       },
//     },
//   },
//   drawerDefaultStyles
// );
// export default DrawerStack;
