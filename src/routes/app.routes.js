import React from "react";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Products } from "../screens/Product/Products";
import { Categories } from "../screens/Category/Categories";

const { Navigator, Screen } = createMaterialTopTabNavigator();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen name="Produtos" component={Products} />
      <Screen name="Categorias" component={Categories} />
    </Navigator>
  );
}