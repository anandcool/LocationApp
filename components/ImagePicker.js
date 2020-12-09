import React from 'react'
import {Text,View,Button, StyleSheet,Image, Alert} from 'react-native'
import Colors from '../constants/Colors'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'

const ImgPicker = props =>{

    const verifyPermission = async () =>{
        const result = await Permissions.askAsync(Permissions.CAMERA_ROLL)
        if(result !== 'granted'){
            Alert.alert('Insufficient Permission','Please Provide All the Permission',[{text:'Okay'}])
            return false
        }
        return true
    }   

    const takeImageHandler = async () =>{
        // const hasPermission = await verifyPermission()
        // if(!hasPermission)
        // return ;
      const image =  await ImagePicker.launchCameraAsync({
            allowsEditing:true,
            aspect:[16,9],
            quality:0.5
        })
        console.log(image)
    }
    return (
        <View style={styles.imagePicker}>
            <View style={styles.imagePreview}><Text>No image picked yet!!!</Text></View>
            <Button title="Take Image" color={Colors.primary} onPress={()=>takeImageHandler()}/>
            <Image style={styles.image}/>
        </View>
    )

}

const styles = StyleSheet.create({
    imagePicker:{
        alignItems:'center'
    },
    imagePreview:{
        width:'100%',
        height:200,
        marginBottom:10,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#ccc',
        borderWidth:1
    },
    image:{
        width:'100%',
        height:'100%'
    }
})


export default ImgPicker