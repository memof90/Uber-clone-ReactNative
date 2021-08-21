//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// NAVIGATION
import { createStackNavigator } from '@react-navigation/stack';
// Tailiwind
import tw from 'tailwind-react-native-classnames';
// Components
import Map from '../Components/Map/Map';
import NavigateCard from '../Components/cardNavigate/NavigateCard';


// create a component
const MapScreen = () => {

    const Stack = createStackNavigator();

    return (
        <View>
            <View style={tw `h-1/2`}>
                <Map />
            </View>
            <View style={tw `h-1/2`}>
                <Stack.Navigator>
                <Stack.Screen name="NavigateCard" 
                component={NavigateCard} 
                options={{headerShown: false}}
                />

                </Stack.Navigator>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default MapScreen;
