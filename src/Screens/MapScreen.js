//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Tailiwind
import tw from 'tailwind-react-native-classnames';
// Components
import Map from '../Components/Map/Map';


// create a component
const MapScreen = () => {
    return (
        <View>
            <View style={tw `h-2/3`}>
                <Map />
            </View>
            <View style={tw `h-1`}></View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default MapScreen;
