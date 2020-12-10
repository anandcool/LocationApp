import React,{useEffect} from 'react'
import { FlatList, Text, View } from 'react-native'
import Colors from '../constants/Colors'
import CustomHeaderButton from '../components/HeaderButton';
import { HeaderButtons,Item } from 'react-navigation-header-buttons';
import { useDispatch, useSelector } from 'react-redux';
import PlaceItem from '../components/PlaceItem';
import * as placesAction from '../store/places-action'


const PlaceListScreen = (props) =>{

    const places  = useSelector(state=> state.places.places)
    // console.log("places",places)
    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(placesAction.loadPlaces())
  
      // console.log("hell",places)
    },[dispatch])

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