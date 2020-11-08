import {SHOW_WEATHER} from "../actions/weatherActions"

function weatherReducer(state, action) {
    switch (action.type) {
        case SHOW_WEATHER:
            return {
                ...state,
                city: action.payload.city,
                country: action.payload.country,
                temp: action.payload.temp,
                pressure: action.payload.pressure,
                sunset: action.payload.sunset
            }
        default:
            return state;
    }
}

export default weatherReducer;