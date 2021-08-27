import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'

// REACT NATIVE ELEMENTS ICON
import { Icon } from 'react-native-elements';

// TAILWIND
import tw from 'tailwind-react-native-classnames';

// REACT NAVIGATION
import { useNavigation } from '@react-navigation/native';

const NavFavorites = () => {

    const data = [
        {
            id: "123",
            icon: "home",
            location: "Home",
            destination: "Code Street, London, Uk"
        },
        {
            id: "456",
            icon: "briefcase",
            location: "Work",
            destination: "London Eye, London, Uk"
        },
    ];

    return (
        <FlatList 
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item : {location, destination, icon}}) => (
                <TouchableOpacity
                style={tw `flex-row items-center p-5`}
                >
                    <Icon 
                        style={tw `mr-4 rounded-full bg-gray-300 p-3`}
                        name={icon}
                        type="ionicon"
                        color="#fff"
                        size={18}
                    />
                </TouchableOpacity>
            )}
        />
    )
}

export default NavFavorites

const styles = StyleSheet.create({})
