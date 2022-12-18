// import { createStore, combineReducers} from 'redux';
// import Loginreducers from './reducers';
// import FavReducer from './FavReducer'
 

import { createStore } from 'redux'
import RootReducers from './RootReducers';

export const store = createStore(RootReducers)

// const rootReducer = combineReducers({
//   Loginreducers,
//   FavReducer
// });
 
// export const store = createStore(rootReducer);