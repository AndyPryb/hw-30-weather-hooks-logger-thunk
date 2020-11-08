import React, {useState} from 'react';

const Weather = props => {

    const [state, setState] = useState({
        message: 'Enter city name'
    });

    return (
        <div className='infoWeath'>
            {!state.message &&
            <div>
                <p>Location: {props.city}, {props.weatherInfo.country}</p>
                <p>Temperature: {props.temp}</p>
                <p>Pressure: {props.pressure}</p>
                <p>Sunset: {new Date(props.sunset*1000).toLocaleTimeString("he-IL")}</p>
            </div>
            }
            <p>{state.message}</p>
        </div>
    );
};

export default Weather;