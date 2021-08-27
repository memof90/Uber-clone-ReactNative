import React from 'react'
import { View, Text, SafeAreaView,TouchableOpacity, FlatList, Image } from 'react-native';

// REACT NATIVE ELEMENTS ICON
import { Icon } from 'react-native-elements';

// Navegation
import { useNavigation } from '@react-navigation/native';

// Tailiwind
import tw from 'tailwind-react-native-classnames';

const RideOptionsCards = () => {
     // SetUp Navegation
     const navigation = useNavigation();

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
            style={tw `absolute top-3 z-50 left-5 p-3 rounded-full`}
            onPress={() => navigation.navigate("NavigateCard")}
            >
                <Icon type="fontawesome" name="chevron-left" />
            </TouchableOpacity>
            <Text style={tw `text-center py-5 text-xl`}>Select a Ride</Text>
        <FlatList 
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item : {id,title,multipier,image}, item}) => (
                <TouchableOpacity>
                    <Image 
                        style={{
                            width: 100,
                            height: 100,
                            resizeMode: "contain"
                        }}
                        source={{ uri: image }}
                    />
                </TouchableOpacity>
            )}
        />
        </View>
        </SafeAreaView>
    )
}

export default RideOptionsCards
