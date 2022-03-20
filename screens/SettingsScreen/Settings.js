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

export const Settings = ({ navigation }) => {
  const [locStatus, setLocStatus] = useState(true);
  const [soundStatus, setSoundStatus] = useState(false);
  const [vibStatus, setVibStatus] = useState(false);

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, backgroundColor: "#1a232a" }}>
        <View style={styles.profileInfo}>
          <ScrollView >
            <View style={styles.spaceBetweenHead}>
              <Text style={styles.title}>Settings</Text>
            </View>
            <View style={styles.spaceBetween}>
              <View style={styles.spaceBetweenInner}>
                <Image
                  style={styles.subImg}
                  source={require("../../assets/images/settings/difficulty.png")}
                />
                <Text style={styles.title}>Difficulty</Text>
              </View>
              <View style={styles.spaceBetweenInner}>
                <Text style={styles.title}>Easy</Text>
                <Image
                  style={styles.rightIcon}
                  source={require("../../assets/images/arrow-right.png")}
                />
              </View>
            </View>
            <View style={styles.spaceBetween}>
              <View style={styles.spaceBetweenInner}>
                <Image
                  style={styles.subImg}
                  source={require("../../assets/images/settings/language.png")}
                />
                <Text style={styles.title}>Language</Text>
              </View>
              <View style={styles.spaceBetweenInner}>
                <Text style={styles.title}>Eng</Text>
                <Image
                  style={styles.rightIcon}
                  source={require("../../assets/images/arrow-right.png")}
                />
              </View>
            </View>
            <View style={styles.spaceBetween}>
              <View style={styles.spaceBetweenInner}>
                <Image
                  style={styles.subImg}
                  source={require("../../assets/images/settings/location.png")}
                />
                <Text style={styles.title}>Location</Text>
              </View>
              <View style={styles.spaceBetweenInner}>
                <ToggleSwitch
                  isOn={locStatus}
                  onColor="green"
                  offColor="gray"
                  size="large"
                  onToggle={isOn => setLocStatus(isOn)}
                />
              </View>
            </View>
            <View style={styles.spaceBetween}>
              <View style={styles.spaceBetweenInner}>
                <Image
                  style={styles.subImg}
                  source={require("../../assets/images/settings/sound.png")}
                />
                <Text style={styles.title}>Sound</Text>
              </View>
              <View style={styles.spaceBetweenInner}>
              <ToggleSwitch
                  isOn={soundStatus}
                  onColor="green"
                  offColor="gray"
                  trackOnStyle={{text: "On"}}
                  size="large"
                  onToggle={isOn => setSoundStatus(isOn)}
                />
              </View>
            </View>
            <View style={styles.spaceBetween}>
              <View style={styles.spaceBetweenInner}>
                <Image
                  style={styles.subImg}
                  source={require("../../assets/images/settings/sound.png")}
                />
                <Text style={styles.title}>Vibaration</Text>
              </View>
              <View style={styles.spaceBetweenInner}>
              <ToggleSwitch
                  isOn={vibStatus}
                  onColor="green"
                  offColor="gray"
                  size="large"
                  onToggle={isOn => setVibStatus(isOn)}
                />
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
    marginVertical: 15,
  },
  title: {
    fontSize: 20,
    color: "white",
    marginVertical: 5,
    fontWeight: "bold",
    padding: 10,
  },
  subImg: {
    borderRadius: 50,
    width: 40,
    height: 40,
  },
  rightIcon: {
    width: 20,
    height: 20,
  }
});

export const SettingsNavigationOptions = (navData) => {
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
