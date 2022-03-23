import { StyleSheet, View, Text, Image } from "react-native";
import React from "react";
import { Avatar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const styles = StyleSheet.create({
  avatarContainer: {
    padding: 4,
    backgroundColor: "white",
  },
  menuItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 5,
    flexDirection: "row",
    color: 'white',
  },
  name: {
    fontSize: 16,
    color: "white",
    marginVertical: 5,
    fontWeight: "bold",
    width: "70%",
  },
  leftImg: {
    width: 30, 
    height: 30,
  },
  rightArrow: {
    width: 20, 
    height: 20,
  }
});

export const DrawerCustomLabel = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.menuItem}>
      <Image
        style={styles.leftImg}
        source={require("../assets/images/noti-filter.png")}
      />
      <Text style={{ ...styles.name, color: '#fff' }}> Edit Profile </Text>
      <Image
        style={styles.rightArrow}
        source={require("../assets/images/arrow-right.png")}
      />
    </View>
  );
};
