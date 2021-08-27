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
            renderItem={({item}) => (
                <TouchableOpacity />
            )}
        />
    )
}

export default NavFavorites

const styles = StyleSheet.create({})
