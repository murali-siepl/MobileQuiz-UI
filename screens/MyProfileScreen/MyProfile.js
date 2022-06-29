import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  LogBox,
} from "react-native";
import React, { useEffect, useState } from "react";
import ToggleSwitch from 'toggle-switch-react-native';
import CustomHeaderButton from "./../../components/shared/CustomHeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import Colors from "./../../constants/Color";

export const MyProfile = ({ navigation }) => {
  const [locStatus, setLocStatus] = useState(true);
  const [soundStatus, setSoundStatus] = useState(false);
  const [vibStatus, setVibStatus] = useState(false);

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, backgroundColor: "#1a232a" }}>
        <View style={styles.profileInfo}>
          <ScrollView>
            <View style={styles.spaceBetweenHead}>
              <Text style={styles.title}>My Profile</Text>
            </View>

            <View style={styles.spaceBetween}>
              <View style={styles.spaceBetweenInner}>
                <Image
                  style={styles.subImg}
                  source={require("../../assets/images/settings/sound.png")}
                />
                <View style={styles.spaceBetweenH}>
                  <Text style={styles.title}>Mohan Rathod </Text>
                  <Text style={styles.title}>phone </Text>
                  <Text style={styles.title}>email </Text>
                </View>
                <View style={styles.spaceBetweenH}>
                  <Text style={styles.title}> </Text>
                  <Text style={styles.title}>Verified </Text>
                  <Text style={styles.title}>Verified </Text>
                </View>
              </View>

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
  spaceBetween: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#2E4150",
    paddingVertical: 10,
  },
  spaceBetweenInner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  spaceBetweenH: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  title: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    padding: 5,
  },
  subImg: {
    borderRadius: 50,
    width: 100,
    height: 100,
  },
  rightIcon: {
    width: 20,
    height: 20,
  }
});

export const MyProfileNavigationOptions = (navData) => {
  return {
    headerTitle: "",
    headerLeft: () => (
      <Image
        style={{ width: 45, height: 45 }}
        source={require("../../assets/images/logo.png")}
      />
    ),
    headerRight: () => (
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
  };
};
