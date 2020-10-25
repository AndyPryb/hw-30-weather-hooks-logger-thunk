import React from 'react';

const Form = () => {

    const baseUrl = "http://api.openweathermap.org/data";
    const key = "4f0a3482faba41ba335a74ea479a0f69";

    const handleSubmitWeather = event => {
        event.preventDefault(); // Отменяем дефолтное поведение
        const city = event.currentTarget.city.value.trim(); // аналог this, потому-что у стрелочной функции нету this
        fetch(`${baseUrl}/2.5/weather?q=${city}&appid=${key}&units=metric`)
            .then(response => response.json())
            .then(res => console.log(res));
    }
    return (
        <form onSubmit={handleSubmitWeather}>
            <input type='text' name='city' placeholder='City'/>
            <button type='submit'>Get weather</button>
        </form>
    )
};

export default Form;