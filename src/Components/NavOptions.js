//import liraries
import React  from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
// REACT NATIVE ELEMENTS ICON
import { Icon } from 'react-native-elements';
// TAILWIND
import tw from 'tailwind-react-native-classnames';
// REACT NAVIGATION
import { useNavigation } from '@react-navigation/native';
// REDUX
import { useSelector } from 'react-redux';
import { selectOrigin } from '../../redux/slices/navSlice';
// data
const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen"
    },
    {
        id: "456",
        title: "Order Food",
        image: "https://links.papareact.com/28w",
        screen: "EatScreen"
    }
]

// create a component
const NavOptions = () => {
    
    // props to navigation
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);
    return (
        <FlatList
            data={data}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item } ) => (
                <TouchableOpacity
                onPress={() => navigation.navigate(item.screen)}
                style={tw `p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
                disabled={!origin}
                >
                    <View>
                        <Image 
                            style={{
                                width: 120,
                                height: 120,
                                resizeMode: 'contain'
                            }}
                            source={{
                                uri: item.image
                            }}
                        />
                        <Text style={tw `mt-2 text-lg  font-semibold`}>{item.title}</Text>
                        <Icon 
                            style={tw `p-2 bg-black rounded-full w-10 mt-4`}
                            name="arrowright" color="white" type="antdesign"
                        />
                    </View>
                </TouchableOpacity>
            )}   
        />
    );
};


//make this component available to the app
export default NavOptions;
