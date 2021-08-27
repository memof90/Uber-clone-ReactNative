import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

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
    <KeyboardAvoidingView 
    style={{ flex: 1}}
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
    >
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
    </KeyboardAvoidingView>
    </SafeAreaProvider>
    </NavigationContainer>
    </Provider>
  
  );
}


