import React from "react";
import { View, Text, Image } from "react-native";
import { DrawerHomeLabel } from "./DrawerLabel";
import { DrawerCustomLabel } from "./DrawerCustomLabel";
import EditProfile from "./../screens/DrawerScreens/EditProfile";
import {
  AntDesign,
  Entypo,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import GameRules from "./../screens/DrawerScreens/GameRules";
import CustomarCare from "./../screens/DrawerScreens/CustomarCare";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import MainStack from "./stacks/MainStack";
import LeadboardStack from "./stacks/LeadboardStack";
import MyProfile from "./stacks/MyProfile";
import SettingsStack from "./stacks/SettingsStack";
import SubscriptionStack from "./stacks/SubscriptionStack";
import helpFaqStack from "./stacks/HelpFaqStack";
import RateusStack from "./stacks/RateusStack";
import AboutStack from "./stacks/AboutStack";
import { useDispatch } from "react-redux";
import { logout } from "./../store/actions/Authenticate";


const drawerDefaultStyles = {
  headerShown: false,
  drawerContentStyle: {
    backgroundColor: "rgba(225, 220, 220, 1)",
  },
  drawerLabelStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  drawerItemStyle: {
    backgroundColor: "#23313C",
    marginBottom: 10,
    borderColor: "#2E4150",
    borderWidth: 2,
    borderRadius: 8,
    marginLeft: 10,
    marginRight: 10,
    width: "85%",
    alignSelf: "center",
  },
  drawerStyle: {
    width: '100%',
    padding: 0,
    margin: 0,
    backgroundColor: '#1A232A',
  },
};

const DrawerStackNavigator = createDrawerNavigator();

const DrawerStack = (props, navigation) => {
  const dispatch = useDispatch();
  return (
    <DrawerStackNavigator.Navigator
      drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: { marginVertical: 5 },
      }}
      screenOptions={drawerDefaultStyles}
      drawerContent={(props) => (
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem
            label="Logout"
            labelStyle={{
              color: "white",
              fontWeight: "bold",
              fontSize: 16,
            }}
            style={{
              backgroundColor: "#23313C",
              marginBottom: 10,
              borderColor: "#2E4150",
              borderWidth: 2,
              borderRadius: 8,
              marginLeft: 10,
              marginRight: 10,
              width: "85%",
              alignSelf: "center",
            }}
            icon={(config) => (
              <Image
                source={require('../assets/images/left-menu/logout.png')}
                fadeDuration={0}
                style={{ width: 25, height: 25 }}
              />
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
          headerLeft: () =>
            <NavigationDrawerStructure
              navigationProps={navigation}
            />,
          drawerItemStyle: {
            backgroundColor: "#89FB41",
            padding: 0,
            margin: 0,
            marginBottom: 10,
            width: "100%",
            alignSelf: "center",
            borderRadius: 0,
          },
          drawerLabel: DrawerHomeLabel,
        }}
      />
      <DrawerStackNavigator.Screen
        name="MyProfile"
        component={MyProfile}
        options={{
          title: "My Profile",
          headerLeft: () =>
            <NavigationDrawerStructure
              navigationProps={navigation}
            />,
          drawerIcon: (config) => (
            <Image
              source={require('../assets/images/left-menu/profile.png')}
              fadeDuration={0}
              style={{ width: 25, height: 25 }}
            />
          ),
        }}
      />
      <DrawerStackNavigator.Screen
        name="Leadboard"
        component={LeadboardStack}
        options={{
          title: "Ranking",
          headerLeft: () =>
            <NavigationDrawerStructure
              navigationProps={navigation}
            />,
          drawerIcon: (config) => (
            <Image
              source={require('../assets/images/left-menu/lb.png')}
              fadeDuration={0}
              style={{ width: 25, height: 25 }}
            />
          ),
        }}
      />
      <DrawerStackNavigator.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          title: "Settings",
          drawerIcon: (config) => (
            <Image
              source={require('../assets/images/left-menu/settings.png')}
              fadeDuration={0}
              style={{ width: 25, height: 25 }}
            />
          ),
        }}
      />
      <DrawerStackNavigator.Screen
        name="Subscription"
        component={SubscriptionStack}
        options={{
          title: "Subscription",
          drawerIcon: (config) => (
            <Image
              source={require('../assets/images/left-menu/settings.png')}
              fadeDuration={0}
              style={{ width: 25, height: 25 }}
            />
          ),
        }}
      />
      <DrawerStackNavigator.Screen
        name="FaqAndContact"
        component={helpFaqStack}
        options={{
          title: "Help & FAQ",
          drawerIcon: (config) => (
            <Image
              source={require('../assets/images/left-menu/help-faq.png')}
              fadeDuration={0}
              style={{ width: 25, height: 25 }}
            />
          ),
        }}
      />
      <DrawerStackNavigator.Screen
        name="Aboutus"
        component={AboutStack}
        options={{
          title: "About us",
          drawerIcon: (config) => (
            <Image
              source={require('../assets/images/left-menu/about.png')}
              fadeDuration={0}
              style={{ width: 25, height: 25 }}
            />
          ),
        }}
      />
      <DrawerStackNavigator.Screen
        name="Rateus"
        component={RateusStack}
        options={{
          title: "Rate us",
          drawerIcon: (config) => (
            <Image
              source={require('../assets/images/left-menu/rateus.png')}
              fadeDuration={0}
              style={{ width: 25, height: 25 }}
            />
          ),
        }}
      />
    </DrawerStackNavigator.Navigator>
  );
};
export default DrawerStack;
