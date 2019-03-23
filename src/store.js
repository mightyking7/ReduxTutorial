import {createStore, applyMiddleware} from 'redux';
import thunk from 'react-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleWare = [thunk];

const store = createStore(rootReducer, initialState, applyMiddleware(...middleWare));

export default store;