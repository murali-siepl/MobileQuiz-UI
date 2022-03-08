import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { useSelector } from "react-redux";
import DrawerStack from "./DrawerNavigation";
import NonAuthStack from "./stacks/NonAuthStack";
import LoadingScreen from "./../screens/LoadingScreen";

export default AppNavigator = () => {
  const isAuth = useSelector((state) => !!state.auth.token);
  const didtry = useSelector((state) => state.auth.didTryLogin);
  return (
    <NavigationContainer>
      <DrawerStack />
      {isAuth && <DrawerStack />}
      {!isAuth && didtry && <NonAuthStack />}
      {!isAuth && !didtry && <LoadingScreen />}
    </NavigationContainer>
  );
};
