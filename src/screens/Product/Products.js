import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useAuth } from "../../context/auth";

const Products = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <View style={styles.container}>
      <Text>{user.email}</Text>
    </View>
  );
};
export { Products };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});