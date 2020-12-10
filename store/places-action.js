import * as FileSystem from 'expo-file-system'
import { fetchPlaces, insertPlace } from '../helpers/db'


export const ADD_PLACE = 'ADD_PLACE'
export const SET_PLACES= 'SET_PLACES'

export const addPlace = (title,image) =>{

    return async dispatch =>{
        
        const fileName = image.split('/').pop()

        const newPath = FileSystem.documentDirectory + fileName;
        // console.log("newPath",newPath);
        // console.log("image",image)
        
        try {
            await FileSystem.moveAsync({
                from:image,
                to:newPath
            })
            const db = await insertPlace(title,image,'Dummy Address',15.6,12.3)
            // console.log(db);
            dispatch({type:ADD_PLACE,placeData:{id:db.insertId,title:title,image:newPath}})
        } catch (error) {
            console.log(error)
            throw error
        }



    }

}

export const loadPlaces = () =>{

    return async dispatch =>{
        try {
            const dbResult = await fetchPlaces()
            // console.log(dbResult)
            dispatch({type:SET_PLACES,places:dbResult.rows._array})
        } catch (error) {
           console.log(error) 
        }
    }
}