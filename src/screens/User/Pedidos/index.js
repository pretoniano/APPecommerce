import React from "react";

import { View, Text, StyleSheet } from "react-native";
import Responsive from "react-native-lightweight-responsive";
import { CardPedidos } from "../../../components/CardPedidos";

import theme from "../../../globals/theme";

const Pedidos = () => {
  return (
    <View style={styles.container}>
      <View></View>

      <View style={styles.pedidos}>
        <CardPedidos ></CardPedidos>
        <CardPedidos></CardPedidos>
        <CardPedidos></CardPedidos>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Responsive.font(60),
  },
  selecionado: {
  },
});

export { Pedidos };
