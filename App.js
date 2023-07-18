import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Rotate from './src/rotate';
import Gyro from './src/gyroscope';

export default function App() {
  return (
    <View style={styles.container}>
      <Gyro />
      <Rotate />
      <Text>Hello world!!! this works!!!</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
