import Weather from "../components/Weather";
import {connect} from "react-redux";
import {showWeatherAction} from "../actions/weatherActions";

function mapStateToProps(state) {
    return {
        weatherInfo: {
            city: state.weatherInfo.city,
            country: state.weatherInfo.country,
            pressure: state.weatherInfo.pressure,
            sunset: state.weatherInfo.sunset,
            temperature: state.weatherInfo.temperature,
        }
    }
}

function mapDispatchToProps(dispatch) {
    return {
        showWeather: (weatherInfo) => dispatch(showWeatherAction(weatherInfo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);