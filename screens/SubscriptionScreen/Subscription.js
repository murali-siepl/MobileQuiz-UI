import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  LogBox,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import ToggleSwitch from 'toggle-switch-react-native';
import CustomHeaderButton from "./../../components/shared/CustomHeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import Colors from "./../../constants/Color";
import CustomButton from "./../../components/shared/Button";
import { LinearGradient } from "expo-linear-gradient";

export const Subscription = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <ScrollView >
        <View style={{ flex: 1, backgroundColor: "#1a232a" }}>
          <Text style={styles.supTitle}>Choose Your Plan</Text>
          <Text style={styles.subTitle}>Learning can be fun and reasonable too. subscribe to our plans for better learning experience.</Text>


          <View style={styles.profileInfo}>
            <Text style={[styles.subType, {backgroundColor: "#FFC83D"}]}>Recommended</Text>
            <View style={styles.spaceBetweenHead}>
              <View style={styles.subImgBlock}>
                <Image
                  style={styles.subImgWithBg}
                  source={require("../../assets/images/sub-image.png")}
                />
              </View>

              <Text style={styles.title}>Quiz Series Part-1</Text>
              <View style={styles.textAmountBlock}>
                <Text style={styles.textAmountBig}>&#8377; 800</Text>
                <Text style={styles.textAmount}> / Yearly</Text>
              </View>
            </View>
            <View style={styles.spaceBetween}>
              <View style={styles.spaceBetweenInner}>
                <Image
                  style={styles.subImg}
                  source={require("../../assets/images/sub-check.png")}
                />
                <Text style={styles.title}>Unlimited Quiz Access Available.</Text>
              </View>
            </View>
            <View style={styles.spaceBetween}>
              <View style={styles.spaceBetweenInner}>
                <Image
                  style={styles.subImg}
                  source={require("../../assets/images/sub-check.png")}
                />
                <Text style={styles.title}>Unlimited Instant Result Reports</Text>
              </View>
            </View>
            <View style={styles.spaceBetween}>
              <View style={styles.spaceBetweenInner}>
                <Image
                  style={styles.subImg}
                  source={require("../../assets/images/sub-check.png")}
                />
                <Text style={styles.title}>Asynchronous assignments</Text>
              </View>
            </View>
            <View style={styles.spaceBetween}>
              <View style={styles.spaceBetweenInner}>
                <Image
                  style={styles.subImg}
                  source={require("../../assets/images/sub-check.png")}
                />
                <Text style={styles.title}>Up to 100 participants</Text>
              </View>
            </View>

            <LinearGradient
              start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
              colors={['#C0FF77', '#89FB41', '#FFC83D', '#D3771C']}
              style={styles.linearGradient}
            >
              <CustomButton
                onPress={() => {
                  navigation.navigate("Cart");
                }}
                style={styles.buttonText}
              >
                Add To Cart
              </CustomButton>
            </LinearGradient>

          </View>


          <View style={styles.profileInfo}>
            <Text style={[styles.subType, {backgroundColor: "#FF913D"}]}>Standard Plan</Text>
            <View style={styles.spaceBetweenHead}>
              <View style={styles.subImgBlock}>
                <Image
                  style={styles.subImgWithBg}
                  source={require("../../assets/images/sub-image.png")}
                />
              </View>

              <Text style={styles.title}>Quiz Series Part-2</Text>
              <View style={styles.textAmountBlock}>
                <Text style={styles.textAmountBig}>500</Text>
                <Text style={styles.textAmount}> / Yearly</Text>
              </View>
            </View>
            <View style={styles.spaceBetween}>
              <View style={styles.spaceBetweenInner}>
                <Image
                  style={styles.subImg}
                  source={require("../../assets/images/sub-check.png")}
                />
                <Text style={styles.title}>Unlimited Quiz Access Available.</Text>
              </View>
            </View>
            <View style={styles.spaceBetween}>
              <View style={styles.spaceBetweenInner}>
                <Image
                  style={styles.subImg}
                  source={require("../../assets/images/sub-check.png")}
                />
                <Text style={styles.title}>Unlimited Instant Result Reports</Text>
              </View>
            </View>
            <View style={styles.spaceBetween}>
              <View style={styles.spaceBetweenInner}>
                <Image
                  style={styles.subImg}
                  source={require("../../assets/images/sub-check.png")}
                />
                <Text style={styles.title}>Asynchronous assignments</Text>
              </View>
            </View>
            <View style={styles.spaceBetween}>
              <View style={styles.spaceBetweenInner}>
                <Image
                  style={styles.subImg}
                  source={require("../../assets/images/sub-check.png")}
                />
                <Text style={styles.title}>Up to 100 participants</Text>
              </View>
            </View>

            <LinearGradient
              start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
              colors={['#C0FF77', '#89FB41', '#FFC83D', '#D3771C']}
              style={styles.linearGradient}
            >
              <CustomButton
                onPress={() => {
                  navigation.navigate("Cart");
                }}
                style={styles.buttonText}
              >
                Add To Cart
              </CustomButton>
            </LinearGradient>

          </View>

        </View>
      </ScrollView >
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Colors.darkBlack,
    color: Colors.textColor,
    paddingVertical: 10,
    paddingHorizontal: 25,
    width: "100%",
  },
  profileInfo: {
    flex: 1,
    padding: 25,
    marginVertical: 25,
    borderRadius: 8,
    backgroundColor: "#23313C",
    borderColor: "#2E4150",
    borderWidth: 1,
    width: "100%",
  },
  textAmountBlock: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomColor: "#89FB41",
    borderBottomWidth: 2,
    color: "#89FB41",
    marginTop: 10,
  },
  textAmountBig: {
    fontSize: 22,
    color: "#89FB41",
  },
  textAmount: {
    color: "#89FB41",
  },
  spaceBetweenHead: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    marginVertical: 20,
  },
  spaceBetween: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
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
  supTitle: {
    fontSize: 22,
    color: "white",
    paddingHorizontal: 10,
    alignSelf: "center",
  },
  title: {
    fontSize: 16,
    color: "white",
    paddingHorizontal: 10,
    alignSelf: "center",
  },
  subTitle: {
    fontSize: 12,
    color: "#999999",
    paddingBottom: 25,
    alignSelf: "center",
  },
  subType: {
    borderRadius: 20,
    alignSelf: "center",
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginTop: 20,
    position: 'absolute',
    top: -38,
    left: "38%",
    zIndex: 50,
    fontWeight: "bold",
    color: "#000",
  },
  subImg: {
    borderRadius: 50,
    width: 20,
    height: 20,
  },
  subImgBlock: {
    padding: 10,
    backgroundColor: "#FFA300",
    borderRadius: 5,
    marginBottom: 15,
  },
  subImgWithBg: {
    width: 40,
    height: 40,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: '#000',
    backgroundColor: 'transparent',
  },
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
