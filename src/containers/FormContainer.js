import {fetchWeatherAction, showWeatherAction} from "../actions/weatherActions";
import {connect} from "react-redux";
import FormControl from "../components/FormControl";


function mapDispatchToProps(dispatch) {
    return {
        fetchWeather: city => dispatch(fetchWeatherAction(city)),
        showWeather: weatherInfo => dispatch(showWeatherAction(weatherInfo))
    }
}

export default connect(null, mapDispatchToProps)(FormControl);