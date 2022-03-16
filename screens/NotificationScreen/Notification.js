import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  LogBox,
} from "react-native";
import React, { useEffect, useState } from "react";
import CustomHeaderButton from "./../../components/shared/CustomHeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import Colors from "./../../constants/Color";
import { createNavigationContainer } from "react-navigation";

const notifications = [
  {
    head: "head 1",
    title: "title 1",
    status: "yellow",
  },
  {
    head: "head 22",
    title: "title 2 title 2",
    status: "red",
  },
  {
    head: "head 333",
    title: "title 3 title 3 title 3",
    status: "yellow",
  },
  {
    head: "head 4444",
    title: "title 4 title 4 title 4 title 4",
    status: "red",
  },
];

export const Notification = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, backgroundColor: "#1a232a" }}>
        <View style={styles.profileInfo}>
          <ScrollView >
            <View style={styles.spaceBetweenHead}>
              <Text style={styles.title}>Notification</Text>
              <Image
                style={styles.filter}
                source={require("../../assets/images/noti-filter.png")}
              />
            </View>
            <View style={styles.spaceBetweenH}>
              {notifications.length > 0 ?
                notifications.map((item, i) => (
                  <View key={item.name} style={styles.spaceBetween}>
                    <View style={styles.spaceBetweenH}>
                      <Text style={styles.hlName}>{item.head}</Text>
                      <Text style={styles.subName}>{item.title}</Text>
                    </View>
                    {item.status === "yellow" ? <Text style={styles.statusYellow}></Text>
                      : <Text style={styles.statusRed}></Text>}
                  </View>
                )) :
                <View style={styles.filterCenter}>
                  <Image
                    style={styles.filter}
                    source={require("../../assets/images/noti-no.png")}
                  />
                  <View style={styles.spaceBetweenNoti}>
                    <Text style={styles.title}>You have no notifications</Text>
                    <Text style={styles.subNameCenter}>Refresh for new notifications</Text>
                  </View>
                </View>
              }
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.darkBlack,
    color: Colors.textColor,
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: "100%",
  },
  profileInfo: {
    flex: 1,
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    backgroundColor: "#23313C",
    borderColor: "#2E4150",
    borderWidth: 1,
  },
  spaceBetweenHead: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    marginBottom: 10,
  },
  spaceBetweenNoti: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginBottom: 15,
    alignSelf: "center",
  },
  spaceBetween: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#2E4150",
  },
  spaceBetweenH: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    marginVertical: 15,
  },
  title: {
    fontSize: 20,
    color: "white",
    marginVertical: 5,
    fontWeight: "bold",
  },
  hlName: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  subName: {
    fontSize: 12,
    color: "#bbb",
    fontWeight: "200",
    alignSelf: "flex-start",
  },
  subNameCenter: {
    fontSize: 12,
    color: "#bbb",
    fontWeight: "200",
    alignSelf: "center",
  },
  statusYellow: {
    borderRadius: 50,
    width: 2,
    height: 2,
    borderColor: "yellow",
    borderWidth: 5,
    marginBottom: 15,
    marginRight: 5,
  },
  statusRed: {
    borderRadius: 50,
    width: 2,
    height: 2,
    borderColor: "red",
    borderWidth: 5,
    marginBottom: 15,
    marginRight: 5,
  },
  filterCenter: {
    marginTop: 150,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});

export const NotificationNavigationOptions = (navData) => {
  return {
    headerTitle: "",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
          title="menu"
          color="black"
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "flex-end" }}>
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            iconName="ios-search"
            onPress={() => {
              // navData.navigation.toggleDrawer();
              console.log("Search");
            }}
            title="search"
            color="black"
          />
        </HeaderButtons>
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            iconName="notifications-outline"
            onPress={() => {
              console.log("Notification");
            }}
            title="notification"
            color="black"
          />
        </HeaderButtons>
      </View>
    ),
  };
};
