import React, { useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { authenticate } from "../store/actions/Authenticate";
import { didTryLogin } from "../store/actions/Authenticate";

const LoadingScreen = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const tryLogin = async () => {
      const userData = await AsyncStorage.getItem("userData");
      if (!userData) {
        dispatch(didTryLogin());
        return;
      }
      const transformedData = JSON.parse(userData);
      const { token, userId, email, name } = transformedData;

      dispatch(authenticate(token, userId, email, name));
    };
    tryLogin();
  }, []);
  return (
    <View style={styles.screen}>
      <ActivityIndicator size="large" color="red" />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
