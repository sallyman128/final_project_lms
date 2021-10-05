import {combineReducers} from 'redux'
import coursesReducer from "./coursesReducer"
import usersReducer from './usersReducer'
import studentsReducer from './studentsReducer'
import assignmentsReducer from './assignmentsReducer'


const rootReducer = combineReducers({
  coursesReducer,
  usersReducer,
  studentsReducer,
  assignmentsReducer
})


export default rootReducer
