
import { ThemeProvider } from "styled-components";
import { SafeAreaView, View, StatusBar, StyleSheet, Text } from "react-native";
import theme from "./src/global/style/theme";

import { Routes } from "./src/routes";
import { AuthProvider } from "./src/context/auth";
import { AppRoutes } from "./src/routes/app.routes";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <AuthProvider>
            <AppRoutes />
          </AuthProvider>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: "hidden",
  },
});