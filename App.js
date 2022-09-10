import React from 'react';
import MealsNavigator from './navigation/MealsNavigator';
import { enableScreens } from 'react-native-screens';
// import {legacy_createStore as createStore, combineReducers} from 'redux'
// import { Provider } from 'react-redux';
// import mealsReducer from './store/reducers/meals'

enableScreens();

// const rootReducers = combineReducers({
//   meals: mealsReducer
// })

// const store = createStore(rootReducers)

export default function App() {
  return <MealsNavigator />;
}
