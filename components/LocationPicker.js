import React,{useState} from 'react'
import { Button, StyleSheet, View,Text, Alert, Platform, ActivityIndicator } from 'react-native'
import Colors from '../constants/Colors'
import * as Permissions from 'expo-permissions'
import * as Location from 'expo-location';

const LocationPicker = () =>{
    
    const [pickedLocation,setPickedLocation] = useState();
    const [isFetching,setIsFetching] = useState(false)

    const verifyPermission = async () =>{
        const result = await Permissions.askAsync(Permissions.LOCATION)
        if(result !== 'granted'){
            Alert.alert('Insufficient Permission','Please Provide All the Permission',[{text:'Okay'}])
            return false
        }
        return true
    }

    const getLocationHandler = async () =>{
        const hasPermission = Platform.OS == 'ios' ? await verifyPermission():true;
        if(!hasPermission){
            return;
        }
        try {
            setIsFetching(true)
            let location = await Location.getCurrentPositionAsync({timeout:5000});
            // console.log(location)
            setPickedLocation({
                lat:location.coords.latitude,
                lng:location.coords.longitude
            })
        } catch (error) {
            Alert.alert(
                'Could not fetch location',
                'Please try again later or pick a location on the map',
                [{text:'Okay'}]
            )
        }
        setIsFetching(false)

    }
    return (
        <View style={styles.locationPicker}>
            <View style={styles.mapPreview}>
            {isFetching?(<ActivityIndicator size="large" color={Colors.primary}/>):(<Text>No location chosen yet!!!</Text>)}    
            </View>
            <Button title="Get User Location" color={Colors.primary} onPress={()=> getLocationHandler()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    locationPicker:{
        marginBottom:15
    },
    mapPreview:{
        marginBottom:10,
        width:'100%',
        height:150,
        borderColor:'#ccc',
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default LocationPicker