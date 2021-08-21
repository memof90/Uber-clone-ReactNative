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
        <View style={styles.container}>
            <View style={tw `h-1/2`}>
                <Map />
            </View>
            <View style={tw `h-1`}></View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

//make this component available to the app
export default MapScreen;
