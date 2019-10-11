import { combineReducers } from 'redux'
import username from './username'
import reducers from '../reducers'

const playApp = combineReducers({
    username
})

export default playApp