import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Login from './src/telas/Login';
import { NativeBaseProvider } from 'native-base';

export default function App() {

  return (
    <NativeBaseProvider>
    <View style={styles.container}>
      <Login/>
      <StatusBar style="auto" />
    </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f3f4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
