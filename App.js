import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// 1)  setup redux 
// Redux 
import { Provider } from 'react-redux'
import { store } from './redux/store';

// Safearea React Native Elements
import { SafeAreaProvider } from 'react-native-safe-area-context';

// React Navegation
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// SCREENS
import HomeScreen from './src/Screens/HomeScreen';
import MapScreen from './src/Screens/MapScreen';

export default function App() {

  //Create StackNavegatior()
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
    <NavigationContainer>
    <SafeAreaProvider>
      <Stack.Navigator>
        <Stack.Screen 
          name='HomeScreen'
          component={HomeScreen}
          options={{
            headerShown: false
          }}
         />
        <Stack.Screen 
          name='MapScreen'
          component={MapScreen}
          options={{
            headerShown: false
          }}
         />
      </Stack.Navigator>
    </SafeAreaProvider>
    </NavigationContainer>
    </Provider>
  
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
