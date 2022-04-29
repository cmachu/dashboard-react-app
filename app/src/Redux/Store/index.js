import {createStore, applyMiddleware} from 'redux';
import createReducer from '../Reducers'

const middlewares = [];

function configureStore() {
    return createStore(createReducer(), applyMiddleware(...middlewares));
}

export default configureStore;