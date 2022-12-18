import { combineReducers } from 'redux'
import Loginreducers from './reducers';
import FavReducer from './FavReducer'

export default combineReducers({
    Loginreducers,
    FavReducer
})