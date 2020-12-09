import React, {useState} from 'react'
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { useDispatch } from 'react-redux'
import ImgPicker from '../components/ImagePicker'
import Colors from '../constants/Colors'
import * as placesActions from '../store/places-action'


const NewPlaceScreen = (props) =>{

    const [titleValue,setTitleValue] = useState('')

    const dispatch = useDispatch()

    const titleChangeHandler = text =>{
        setTitleValue(text)
    }

    const savePlaceHandler = () =>{
        dispatch(placesActions.addPlace(titleValue))
        props.navigation.goBack()
    }

    return (
        <ScrollView>
        <View style={styles.form}>
            <Text style={styles.label}>Title</Text>
            <TextInput style={styles.textInput} onChangeText={(e)=>titleChangeHandler(e)} value={titleValue}/>
            <Button title="Save Place" color={Colors.primary} style={styles.btn} onPress={()=>{savePlaceHandler()}}/>
            <ImgPicker/>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
form:{
    margin:30
},
label:{
    fontSize:18,
    marginBottom:15
},
textInput:{
    borderBottomColor:'#ccc',
    borderBottomWidth:1,
    marginBottom:15,
    paddingVertical:4,
    paddingHorizontal:2
},
btn:{
    marginBottom:100
}
})

export default NewPlaceScreen