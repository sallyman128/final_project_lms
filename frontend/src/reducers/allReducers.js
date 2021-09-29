import {combineReducers} from 'redux'
import coursesReducer from "./coursesReducer"


const rootReducer = combineReducers({
  courses: coursesReducer
})

export default rootReducer
