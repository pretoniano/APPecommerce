import React from "react";

import { View, Text, StyleSheet } from "react-native";
import Responsive from "react-native-lightweight-responsive";
import theme from "../../globals/theme";

const CardPedidos = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Pedido #12345 | Data: 12/12/99</Text>
        <Text style={styles.text}>Vendedor: Vendedor Top</Text>
        <Text style={styles.text}>Valor: R$9,99</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",

    width: "100%",
    paddingTop: Responsive.font(17),
    paddingBottom: Responsive.font(30),

    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  content: {
    paddingLeft: Responsive.font(15),
  },
  text: {
    color: "black",
  },
});

export { CardPedidos };
