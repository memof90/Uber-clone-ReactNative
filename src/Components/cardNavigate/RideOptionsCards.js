import React, { useState } from 'react'
import { View, Text, SafeAreaView,TouchableOpacity, FlatList, Image } from 'react-native';

// REACT NATIVE ELEMENTS ICON
import { Icon } from 'react-native-elements';

// Navegation
import { useNavigation } from '@react-navigation/native';

// Tailiwind
import tw from 'tailwind-react-native-classnames';

// REDUX
import { useSelector } from 'react-redux';
import { selectOTravelTimeInformation } from '../../../redux/slices/navSlice';

// If we have Surge pricing, this goes up
const SURGE_CHARGE_RATE = 1.5; 

const RideOptionsCards = () => {

    // Setup select ride
    const [selected, setSelected] = useState(null);
     // SetUp Navegation
     const navigation = useNavigation();
 
    //  Setup pass data to travel Information to view
    const travelTimeInformation = useSelector(selectOTravelTimeInformation);

    //  setUp Rides
    const data = [
        {
            id: "uber-X-123",
            title: "UberX",
            multipier: 1,
            image: "https://links.papareact.com/3pn"
        },
        {
            id: "uber-XL-456",
            title: "Uber XL",
            multipier: 1.2,
            image: "https://links.papareact.com/5w8"
        },
        {
            id: "uber-LUX-789",
            title: "Uber LUX",
            multipier: 1.75,
            image: "https://links.papareact.com/7pf"
        },
    ];
    return (
        <SafeAreaView style={tw `bg-white flex-grow`}>
        <View>
            <TouchableOpacity 
            style={tw `absolute -top-1 z-50 left-5 p-3 rounded-full`}
            onPress={() => navigation.navigate("NavigateCard")}
            >
                <Icon type="fontawesome" name="chevron-left" />
            </TouchableOpacity>
            <Text style={tw `text-center -mt-3 py-5 text-xl`}>Select a Ride - {travelTimeInformation?.distance?.text}</Text>
        <FlatList 
            style={tw `-mt-5`}
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item : {id,title,multipier,image}, item}) => (
                <TouchableOpacity
                    style={tw `flex-row justify-between items-center px-10 ${id === selected?.id && "bg-gray-200"}`}
                    onPress={() => setSelected(item)}
                >
                    <Image 
                        style={{
                            width: 100,
                            height: 100,
                            resizeMode: "contain",
                        }}
                        source={{ uri: image }}
                    />
                    <View style={tw `-ml-6`}>
                        <Text style={tw `text-xl font-semibold`}>{title}</Text>
                        <Text>{travelTimeInformation?.duration?.text} Travel Time</Text>
                    </View>
                    <Text style={tw `text-xl`}>
                        {new Intl.NumberFormat('en-us', {
                            style: 'currency',
                            currency: 'USD'
                        }).format(
                            (travelTimeInformation?.duration?.value * SURGE_CHARGE_RATE * multipier) / 100
                        )}
                    </Text>
                </TouchableOpacity>
            )}
        />
        </View>
        <View style={tw `mt-auto border-t border-gray-200`}>
            <TouchableOpacity 
            style={tw `bg-black py-3 ml-3 mr-3 mt-3 rounded-full
            ${!selected && "bg-gray-300"}` 
            }
            disabled={!selected}
            >
                <Text style={tw `text-center text-white text-xl`}>Choose {selected?.title}</Text>
            </TouchableOpacity>
        </View>
        </SafeAreaView>
    )
}

export default RideOptionsCards
