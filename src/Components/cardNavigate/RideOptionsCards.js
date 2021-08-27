import React from 'react'
import { View, Text, SafeAreaView,TouchableOpacity } from 'react-native';

// REACT NATIVE ELEMENTS ICON
import { Icon } from 'react-native-elements';

// Navegation
import { useNavigation } from '@react-navigation/native';

// Tailiwind
import tw from 'tailwind-react-native-classnames';

const RideOptionsCards = () => {
     // SetUp Navegation
     const navigation = useNavigation();
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

        </View>
        </SafeAreaView>
    )
}

export default RideOptionsCards
