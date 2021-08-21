//import liraries
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';

// Tailiwind
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../Components/NavOptions';

// Google places autoComplete
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

// import GoogleMaps apiKey
import { GOOGLE_MAPS_APIKEY } from '@env';

// create a component
const HomeScreen = () => { 
    return (
        <SafeAreaView style={tw `bg-white h-full`}>
            <View style={tw `p-5`}>
                <Image 
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: 'contain'
                    }}
                    source={{
                        uri: "https://links.papareact.com/gzs"
                    }}
                />
                    <GooglePlacesAutocomplete 
                        placeholder="Where From?"
                        styles={{
                            container: {
                                flex: 0,
                            },
                            textInput: {
                                fontSize: 18
                            }
                        }}
                       nearbyPlacesAPI="GooglePlacesSearch"
                       debounce={400} 
                    />


                {/* Navegation */}
                <NavOptions />
            </View>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
});

//make this component available to the app
export default HomeScreen;
