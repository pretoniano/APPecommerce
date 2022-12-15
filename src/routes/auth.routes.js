import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../screens/User/Login";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator>
      <Screen name="Login" component={Login} />
    </Navigator>
  );
}