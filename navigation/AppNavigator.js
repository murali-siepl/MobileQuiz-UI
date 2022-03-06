import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import DrawerStack from "./DrawerNavigation";
import NonAuthStack from "./stacks/NonAuthStack";

export default AppNavigator = () => {
  return (
    <NavigationContainer>
      {/* <NonAuthStack /> */}
      <DrawerStack />
    </NavigationContainer>
  );
};
