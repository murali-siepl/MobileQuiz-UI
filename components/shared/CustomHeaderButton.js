import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";

const CustomHeaderButton = (props) => {
  return <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />;
};

export default CustomHeaderButton;

const styles = StyleSheet.create({});
