// import React from 'react';
//
// const Form = props => {
//
//     const handleSubmitWeather = event => {
//         event.preventDefault(); // Отменяем дефолтное поведение
//         const city = event.currentTarget.city.value.trim(); // аналог this, потому-что у стрелочной функции нету this
//         props.getWeather(city);
//     }
//     return (
//         <form onSubmit={handleSubmitWeather}>
//             <input type='text' name='city' placeholder='City'/>
//             <button type='submit'>Get weather</button>
//         </form>
//     )
// };
//
// export default Form;