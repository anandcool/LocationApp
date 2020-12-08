import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform,Button } from 'react-native';
import Colors from '../constants/Colors';
import PlacesListScreen, { placesOptions } from '../screens/PlacesListScreen'
import NewPlaceScreen from '../screens/NewPlaceScreen'
import PlaceDetailScreen from '../screens/PlaceDetailScreen'
import MapScreen from '../screens/MapScreen'
import CustomHeaderButton from '../components/HeaderButton';
import { HeaderButtons,Item } from 'react-navigation-header-buttons';

const PlacesStack = createStackNavigator()



const PlacesNavigator = (props) =>{

    // const {navigation} = props
    // console.log(props)

    const defaultOptions = {
        headerTitle:'All Places',
        headerStyle:{
            backgroundColor:Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTintColor:Platform.OS === 'android' ? 'white' : Colors.primary
    }

return (
    <NavigationContainer>
        <PlacesStack.Navigator screenOptions={defaultOptions}>
        <PlacesStack.Screen name="Places" component={PlacesListScreen}/>
        <PlacesStack.Screen name="PlaceDetail" component={PlaceDetailScreen}/>
        <PlacesStack.Screen name="NewPlace" component={NewPlaceScreen}/>
        <PlacesStack.Screen name="Map" component={MapScreen}/>
        </PlacesStack.Navigator>
    </NavigationContainer>
)
}

export default PlacesNavigator