//import liraries
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// NAVIGATION
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
// Tailiwind
import tw from 'tailwind-react-native-classnames';
// REACT NATIVE ELEMENTS ICON
import { Icon } from 'react-native-elements';
// Components
import Map from '../Components/Map/Map';
import NavigateCard from '../Components/cardNavigate/NavigateCard';
import RideOptionsCards from '../Components/cardNavigate/RideOptionsCards';


// create a component
const MapScreen = () => {
    // setUp StackNavegation
    const Stack = createStackNavigator();
    // setup navegation
    const navegation = useNavigation();

    return (
        <View>
        {/* // added menu to back button  */}
        <TouchableOpacity 
        onPress={() => navegation.navigate("HomeScreen")}
        style={tw `bg-gray-200 absolute top-16 left-8 z-50 
        p-3 rounded-full shadow-lg
        `}>
            <Icon name="menu" />
        </TouchableOpacity>
            <View style={tw `h-1/2`}>
                <Map />
            </View>
            <View style={tw `h-1/2`}>
                <Stack.Navigator>
                <Stack.Screen name="NavigateCard" 
                component={NavigateCard} 
                options={{headerShown: false}}
                />
                <Stack.Screen name="RideOptionsCards" 
                component={RideOptionsCards} 
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
