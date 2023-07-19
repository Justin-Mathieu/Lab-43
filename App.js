import { StyleSheet, View } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'
import Header from './src/Header'
import FindPack from "./src/FindPack";
import HomePage from "./src/HomePage";
import Messages from "./src/Messages";
import Profile from './src/Profile';
import Footer from "./src/Footer";




export default function App() {
  const Drawer = createDrawerNavigator();
  return (
    <View style={styles.container}>
      <Header />
      <NavigationContainer>

        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomePage} />
          <Drawer.Screen name="Profile" component={Profile} />
          <Drawer.Screen name="Find Pack" component={FindPack} />
          <Drawer.Screen name="Messages" component={Messages} />
        </Drawer.Navigator>
      </NavigationContainer>
      <Footer />
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
