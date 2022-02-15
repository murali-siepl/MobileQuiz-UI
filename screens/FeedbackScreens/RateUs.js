import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "./../../components/shared/CustomHeaderButton";
import { globalStyles } from "./../../constants/GlobalStyles";
import CustomButton from "./../../components/shared/Button";
import Icon from "react-native-vector-icons/Entypo";
import { Feather } from "@expo/vector-icons";

export const RateUs = ({ navigation }) => {
  return (
    <View style={{ ...globalStyles.container, ...styles.container }}>
      <Image
        style={styles.image}
        source={require("./../../assets/images/rate.png")}
      />
      <View style={styles.googlePlay}>
        <Icon.Button name="google-play" backgroundColor="black">
          <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
            Google Play
          </Text>
        </Icon.Button>
      </View>
      <Text style={styles.opinion}>Your opinion matters to us</Text>
      <Text style={styles.rate}>
        We work super hard to serve you better and would love to know how would
        you rate our app
      </Text>
      <View style={styles.star}>
        {new Array(5).fill(0).map((_, index) => (
          <Feather
            name="star"
            size={24}
            color="black"
            style={{ marginRight: 5 }}
          />
        ))}
      </View>
      <View style={styles.buttons}>
        <CustomButton
          onPress={() => {
            navigation.navigate("Slides");
          }}
          touchWidth="30%"
          style={{ paddingHorizontal: 10 }}
        >
          Menu
        </CustomButton>
        <CustomButton
          onPress={() => {
            navigation.navigate("Slides");
          }}
          touchWidth="30%"
          button={{ fontSize: 15 }}
          style={{ paddingHorizontal: 10 }}
        >
          Submit
        </CustomButton>
        <CustomButton
          onPress={() => {
            navigation.navigate("Slides");
          }}
          touchWidth="30%"
          button={{ fontSize: 15 }}
          style={{ paddingHorizontal: 10 }}
        >
          Back
        </CustomButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    fontSize: 20,
  },
  googlePlay: {
    marginTop: 20,
  },
  opinion: {
    color: "blue",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 30,
  },
  rate: {
    color: "gray",
    lineHeight: 20,
    textAlign: "center",
    marginVertical: 20,
  },
  star: {
    flexDirection: "row",
    marginBottom: 15,
  },
  buttons: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
  },
  image: {
    width: 250,
    height: 250,
  },
});

export const RateUsnavigationOptions = (navData) => {
  return {
    headerTitle: "Rate Us",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
          title="menu"
          color="white"
        />
      </HeaderButtons>
    ),
  };
};
