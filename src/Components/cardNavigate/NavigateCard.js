import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
// Tailiwind
import tw from 'tailwind-react-native-classnames';


// REACT NATIVE ELEMENTS ICON
import { Icon } from 'react-native-elements';

// Google places autoComplete
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

// import GoogleMaps apiKey
import { GOOGLE_MAPS_APIKEY } from '@env';

// REDUX
import { useDispatch } from 'react-redux';
import { setDestination } from '../../../redux/slices/navSlice';
import { useNavigation } from '@react-navigation/native';
// Components
import NavFavorites from '../NavFavorites';


const NavigateCard = () => {

        // Redux setUp
        const dispatch = useDispatch();

        // SetUp Navegation
        const navigation = useNavigation();

    return (
        <SafeAreaView style={tw `bg-white flex-1`}>
            <Text style={tw `text-center py-5 text-xl`}>Good Morning, Memo</Text>
            <View style={tw `border-t border-gray-200 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete 
                        styles={toInputBoxStyles}
                        placeholder='where to?'
                        nearbyPlacesAPI="GooglePlacesSearch"
                        enablePoweredByContainer={false}
                        returnKeyType={"search"}
                        fetchDetails={true}
                        minLength={2}
                        debounce={400}
                        query={{
                           key: GOOGLE_MAPS_APIKEY,
                           language: "en",
                        }}
                        onPress={(data, details = null) => {
                            dispatch(
                                    setDestination({
                                    location: details.geometry.location,
                                    description: data.description
                                    })
                                )
                                navigation.navigate('RideOptionsCards');
                        }}
                        onFail={error => console.error(error)}
                    />
                </View>
                <NavFavorites />
                <View style={tw `flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
                    <TouchableOpacity 
                    style={tw `flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}
                    onPress={()=> navigation.navigate('RideOptionsCards')}
                    >
                        <Icon name="car" type="font-awesome" color="#fff" size={16}/>
                        <Text style={tw `text-white text-center`}>Rides</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={tw `flex flex-row justify-between w-24 px-4 py-3 rounded-full`}>
                        <Icon name="fast-food-outline" type="ionicon" color="#000" size={16}/>
                        <Text style={tw `text-center`}>Eats</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const toInputBoxStyles = StyleSheet.create({
    container : {
        flex: 0,
        backgroundColor: '#fff',
        paddingTop: 20
    },
    textInput : {
        backgroundColor: '#dddddf',
        borderRadius: 0,
        fontSize: 18
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0
    }
});

export default NavigateCard;
