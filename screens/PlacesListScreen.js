import React,{useEffect} from 'react'
import { FlatList, Text, View } from 'react-native'
import Colors from '../constants/Colors'
import CustomHeaderButton from '../components/HeaderButton';
import { HeaderButtons,Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';
import PlaceItem from '../components/PlaceItem';
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
    

    const places  = useSelector(state=> state.places.places)

    return (
    <FlatList 
    data={places}
    renderItem={itemData => <PlaceItem 
        image={itemData.item.imageUri}
        title={itemData.item.title}
        address={null}
        onSelect={()=>props.navigation.navigate('PlaceDetail',{title:itemData.item.title,id:itemData.item.id})}/>}/>
        )
}





export default PlaceListScreen