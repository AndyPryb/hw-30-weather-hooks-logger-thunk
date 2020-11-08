import React, {useState} from 'react';

const FormControl = props => {

    const [weatherInfo, setWeatherInfo] = useState({city: ''});

    const handleChangeInput = (event) => {
        setWeatherInfo({city: event.target.value});
    }

    const handleClickButton = () => {
        setWeatherInfo(props.fetchWeather(weatherInfo.city));
        setWeatherInfo({city: ''});
    }

    return (
        <div>
            <input value={weatherInfo.city} onChange={handleChangeInput} type='text' placeholder='city'/>
            <button onClick={handleClickButton}>Get Weather</button>
        </div>
    );
}

export default FormControl;