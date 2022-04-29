import {combineReducers} from 'redux';
import AppReducer from "../Reducers/AppReducer";

export default () => combineReducers({ // eslint-disable-line import/no-anonymous-default-export
    app: AppReducer,
});