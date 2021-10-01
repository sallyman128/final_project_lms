import {combineReducers} from 'redux'
import coursesReducer from "./coursesReducer"
import usersReducer from './usersReducer'


const rootReducer = combineReducers({
  coursesReducer,
  usersReducer
})


export default rootReducer
