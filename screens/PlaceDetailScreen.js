import React,{useEffect} from 'react'
import { Text, View } from 'react-native'

const PlaceDetailScreen = (props) =>{
    
    useEffect(() =>{
        props.navigation.setOptions({headerTitle:props.route.params.title})
    },[])

    return (
        <View>
            <Text>Place Details Screen</Text>
        </View>
    )
}

export default PlaceDetailScreen