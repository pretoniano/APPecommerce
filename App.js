import { StyleSheet, View } from 'react-native';
import { Login } from './src/screens/User/Login';
import { Register } from './src/screens/User/Register';


export default function App() {
  return (
    <View style={styles.container}>
      <Register />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
