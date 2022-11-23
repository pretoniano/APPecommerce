import { StyleSheet, View } from "react-native";
import { Login } from "./src/screens/User/Login";
import { Register } from "./src/screens/User/Register";
import { Pedidos } from "./src/screens/User/Pedidos";
import { Profile } from "./src/screens/User/Profile";
export default function App() {
  return (
    <View style={styles.container}>
      <Profile />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
