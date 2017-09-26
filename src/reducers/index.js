import {combineReducers} from 'redux'
import counterReducer from './counter'
import weatherReducer from './weather'

export default combineReducers({
  counter: counterReducer,
  weather: weatherReducer
})
