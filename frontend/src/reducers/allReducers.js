import {combineReducers} from 'redux'
import coursesReducer from "./coursesReducer"
import teachersReducer from "./teachersReducer"

export default combineReducers({
  coursesReducer,
  teachersReducer
})