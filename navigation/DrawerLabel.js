import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { Avatar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";

const styles = StyleSheet.create({
  linearGradient: {
    margin: 16,
    padding: 20,
    opacity: 0.6,
    borderRadius: 8,
    width: "100%",
  },
  avatarContainer: {
    padding: 4,
    backgroundColor: "white",
  },
  avatar: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
  },
  title: {
    fontSize: 20,
    color: "#FFC83D",
    marginVertical: 5,
    fontWeight: "bold",
  },
  name: {
    fontSize: 16,
    color: "white",
    marginVertical: 5,
    fontWeight: "bold",
  },
});

export const DrawerHomeLabel = (props) => {
  const { name } = useSelector((state) => state.auth);
  const navigation = useNavigation();
  return (
    <LinearGradient
      start={{ x: 0, y: 0.4 }}
      end={{ x: 0, y: 1.3 }}
      colors={["#000000", "#3C6E1C", "#89FB41"]}
      style={styles.linearGradient}>

      <View style={styles.avatar}>
        <Avatar
          size={100}
          rounded
          onPress={() => {
            navigation.navigate("Home");
          }}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS76AN3AAetgum2ydIslWPm1PyuwYL1Kw6lsw&usqp=CAU",
          }}
          containerStyle={styles.avatarContainer}
        />
        <Text style={{ ...styles.title }}>Hello! Guestuser12</Text>
        <Text style={{ ...styles.name }}>USERNAME: guestuser12</Text>
        <Text style={{ ...styles.name }}>{name}Name</Text>

      </View>

    </LinearGradient>

  );
};
