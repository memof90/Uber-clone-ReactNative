import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// 1)  setup redux 
// Redux 
import { Provider } from 'react-redux'

export default function App() {
  return (
    // <Provider store={}>
    // <View style={styles.container}>
    //   <Text>Lest build Uber Clone</Text>
    //   <StatusBar style="auto" />
    // </View>
    // </Provider>
    <View style={styles.container}>
      <Text>Lest build Uber Clone</Text>
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
