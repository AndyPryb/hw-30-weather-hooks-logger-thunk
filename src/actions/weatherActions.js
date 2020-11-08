import {baseUrl, key} from "../utils/constants";
export const SHOW_WEATHER = 'SHOW_WEATHER';

export const showWeatherAction = weatherInfo => ({
    type: SHOW_WEATHER,
    payload: weatherInfo
});

export const fetchWeatherAction = (city) => {
    return dispatch => {
        fetch(`${baseUrl}?q=${city}&appid=${key}&units=metric`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('' + response.status);
                }
            })
            .then(data =>
                ({
                    city: data.name,
                    country: data.sys.country,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    sunset: data.sys.sunset
                })
            )
            .then(cityWeather => dispatch(showWeatherAction(cityWeather)))
            .catch(e => console.log(e));
    }
}