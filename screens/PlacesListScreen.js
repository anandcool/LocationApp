import React,{useEffect} from 'react'
import { Text, View } from 'react-native'
import Colors from '../constants/Colors'
import CustomHeaderButton from '../components/HeaderButton';
import { HeaderButtons,Item } from 'react-navigation-header-buttons';
const PlaceListScreen = (props) =>{

    useEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
                <Item 
                    title="Add place"
                    iconName={Platform.OS==='android'? 'md-add':'md-add'}
                    onPress={()=>props.navigation.navigate('NewPlace')}
                />
              </HeaderButtons>
            ),
          });
        }, [props.navigation]);
    



    return (
        <View>
            <Text>Place List Screen</Text>
        </View>
    )
}





export default PlaceListScreen