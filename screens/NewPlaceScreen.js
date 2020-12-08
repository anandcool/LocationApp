import React, {useState} from 'react'
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import Colors from '../constants/Colors'

const NewPlaceScreen = () =>{

    const [titleValue,setTitleValue] = useState('')

    const titleChangeHandler = text =>{
        setTitleValue(text)
    }

    const savePlaceHandler = () =>{
        console.log("Save!!!")
    }

    return (
        <ScrollView>
        <View style={styles.form}>
            <Text style={styles.label}>Title</Text>
            <TextInput style={styles.textInput} onChangeText={(e)=>titleChangeHandler(e)} value={titleValue}/>
            <Button title="Save Place" color={Colors.primary} onPress={()=>{savePlaceHandler()}}/>
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
}
})

export default NewPlaceScreen