import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  LogBox,
  Button,
  TextInput,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import CustomHeaderButton from "./../../components/shared/CustomHeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import Colors from "./../../constants/Color";
import data from './data';
import CustomSlider from './CustomSlider';
import CardDetails from './CardDetails';
import Input from "../../components/shared/Input";

export const CheckoutScreen = ({ navigation }) => {
  const textInputReference = useRef(null);

  const [codeFlag, setCodeFlag] = useState(false);
  const [code, setCode] = useState("");

  const codeFlagChange = () => {
    setCodeFlag(!codeFlag);
  }

  const handleDiscountCode = (code) => {
    setCode(code);
  }

  return (
    <View style={styles.container}>
      <ScrollView >
        <View style={{ flex: 1, backgroundColor: "#1a232a" }}>


          <View style={styles.profileInfo}>
            <Text style={styles.supTitle}>Selected Plan</Text>
            <View style={styles.spaceBetween}>
              <View style={styles.subImgBlock}>
                <Image
                  style={styles.subImgWithBg}
                  source={require("../../assets/images/sub-image.png")}
                />
              </View>

              <View style={styles.spaceBetweenHead}>
                <Text style={styles.title}>Quiz Series Part-1</Text>
                <Text style={styles.textMonth}>(3 months)</Text>
                <View style={styles.textAmountBlock}>
                  <Text style={styles.subTitle}>&#8377; 800</Text>
                  <Text style={styles.subTitle}> / Yearly</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.spaceBetween}>
          {!codeFlag
            ? <Text style={styles.title}>Got a Discount Code?</Text>
            : <TextInput
              underlineColorAndroid="transparent"
              placeholder="Enter Discount Code"
              placeholderTextColor="#999999"
              autoCapitalize="none"
              onChangeText={handleDiscountCode}
              style={{
                ...styles.input,
                borderColor: textInputReference.current?.isFocused()
                  ? Colors.green
                  : "#BBBBBB82",
              }}
            />
          }
          {!codeFlag
            ? <Text style={styles.textMonth} onPress={codeFlagChange} >Enter Now</Text>
            : <Text style={styles.textMonth} onPress={codeFlagChange} >Send</Text>
          }
        </View>

        <CustomSlider data={data} />

        <CardDetails />

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
    paddingBottom: 0,
    marginVertical: 25,
    borderRadius: 8,
    backgroundColor: "#23313C",
    borderColor: "#2E4150",
    borderWidth: 1,
    width: "100%",
  },
  cartValueBlock: {
    borderRadius: 8,
    backgroundColor: Colors.darkBlack,
    borderColor: "#2E4150",
    borderWidth: 1,
    width: "60%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignSelf: "center",
  },
  cartValueWithBorder: {
    borderColor: "#2E4150",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    color: "#fff",
    paddingHorizontal: 22,
    paddingVertical: 10,
  },
  cartValue: {
    color: "#fff",
    paddingHorizontal: 22,
    paddingVertical: 10,
  },
  subNowBlock: {
    width: '130%',
    height: 80,
    backgroundColor: '#89FB41',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
  },
  textAmountBlock: {
    display: "flex",
    flexDirection: "row",
    marginTop: 5,
  },
  textMonth: {
    fontSize: 14,
    color: "#FFC83D",
  },
  spaceBetweenHead: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    width: "100%",
    paddingHorizontal: 20,
  },
  spaceBetween: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  supTitle: {
    fontSize: 22,
    color: "white",
    alignSelf: "flex-start",
  },
  title: {
    fontSize: 16,
    color: "white",
  },
  subTitle: {
    fontSize: 12,
    color: "#999999",
    paddingBottom: 25,
    alignSelf: "center",
  },
  subImgBlock: {
    padding: 10,
    backgroundColor: "#FFA300",
    borderRadius: 5,
    marginTop: -5,
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
    backgroundColor: '#FFC83D'
  },
  input: {
    borderColor: "#BBBBBB82",
    borderWidth: 1,
    backgroundColor: "#151B21",
    width: "80%",
    fontSize: 15,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    color: "#999999",
    marginBottom: 5,
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
