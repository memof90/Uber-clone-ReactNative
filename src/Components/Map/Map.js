import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'

// Maps
import MapView from 'react-native-maps';

// Tailiwind
import tw from 'tailwind-react-native-classnames';

const Map = () => {
    return (
        <MapView 
        style={tw `flex-1`}
        initialRegion={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.0922,
         longitudeDelta: 0.0421,
        }}
         />
    )
}

export default Map

const styles = StyleSheet.create({
    
})
