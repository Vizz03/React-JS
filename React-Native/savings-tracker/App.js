import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as constants from './Constants'


import Login from './src/Login'
import Dashboard from './src/Dashboard';
import Account from './src/Account'
import Details from './src/Details'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
        {/* <Stack.Screen name="Login" component={Login} options={{ headerShown: false}}/> */}
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Account" component={Account} />
      </Stack.Navigator>
    </NavigationContainer>
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
