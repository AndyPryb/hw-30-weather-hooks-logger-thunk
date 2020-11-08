import thunk from "redux-thunk";
import {logger} from "redux-logger";
import {applyMiddleware, createStore} from "redux";
import weatherReducer from "../reducers/weatherReducer";


const initialState = {
    city: '',
    country: '',
    temp: '',
    pressure: '',
    sunset: ''
};

const store = createStore(weatherReducer, initialState, applyMiddleware(thunk, logger));

export default store;