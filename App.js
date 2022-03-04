// Default Import's 👇

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


// Importing React Navigation componenets 👇
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

// Creates the stack 👇
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
     {/* LoginScreen 👇 */}
      <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />

    {/* HomeScreen 👇 */}
      <Stack.Screen name="Home" component={HomeScreen} />
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
