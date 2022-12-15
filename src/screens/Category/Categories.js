import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useAuth } from "../../context/auth";

const Categories = () => {
  const { user } = useAuth();
  return (
    <View style={styles.container}>
      <Text>{user.name}</Text>
    </View>
  );
};
export { Categories };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
