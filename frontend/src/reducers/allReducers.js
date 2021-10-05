import {combineReducers} from 'redux'
import coursesReducer from "./coursesReducer"
import usersReducer from './usersReducer'
import studentsReducer from './studentsReducer'


const rootReducer = combineReducers({
  coursesReducer,
  usersReducer,
  studentsReducer
})


export default rootReducer
