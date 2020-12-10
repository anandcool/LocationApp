import React from 'react';
import { Provider } from 'react-redux';
import {createStore, combineReducers,applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk';
import { init } from './helpers/db';
import PlacesNavigator from './navigation/PlacesNavigator';
import placesReducer from './store/places-reducer';

const rootReducer = combineReducers({
  places:placesReducer
})

init().then(()=>{
  console.log("Database Initialized successfully")
}).catch(err=> console.log("Database Initialized failed!!!",err))

const store = createStore(rootReducer,applyMiddleware(ReduxThunk))

export default function App() {
  return (
      <Provider store={store}>
      <PlacesNavigator/>
      </Provider>
  );
}
