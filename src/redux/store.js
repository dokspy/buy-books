import { combineReducers, createStore } from 'redux';

import { SignStatusReducer } from './SignStatusReducer';

let reducers = combineReducers({
    signStatus: SignStatusReducer, 
})

const store = createStore(reducers);


export default store;
