import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { Avatar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const styles = StyleSheet.create({
  avatarContainer: {
    padding: 4,
    backgroundColor: "white",
  },
  avatar: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
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
    <View style={styles.avatar}>
      <Text style={{ ...styles.name, color: props.color }}>{name}</Text>
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
    </View>
  );
};
