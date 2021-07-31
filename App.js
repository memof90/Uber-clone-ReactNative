import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// 1)  setup redux 
// Redux 
import { Provider } from 'react-redux'
import { store } from './redux/store';
// SCREENS
import HomeScreen from './src/Screens/HomeScreen';

export default function App() {
  return (
    <Provider store={store}>
   <HomeScreen />
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
