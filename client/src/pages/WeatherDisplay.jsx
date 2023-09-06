import ClearSky from "./weatherTypes/ClearSky";
import PartlyCloudy from "./weatherTypes/PartlyClouds";
import Rain from "./weatherTypes/Rain";
import ThunderStorm from "./weatherTypes/Thunder";
import Snow from "./weatherTypes/Snow";
import Fog from "./weatherTypes/Fogy";


function WeatherDisplay(props) {

    switch (props.description) {
        case 'clear sky':
            return <ClearSky />;
        case 'rain':
            return <Rain />;
        case 'shower rain':
            return <Rain />;
        case 'thunderstorm':
            return <ThunderStorm />;
        case 'few clouds':
            return <PartlyCloudy />;
        case 'broken clouds':
            return <PartlyCloudy />;
        case 'scattered clouds':
            return <PartlyCloudy />
        case 'snow':
            return <Snow />;
        case 'mist':
            return <Fog />;
        default:
            return 'Unknown Weather Type';
    }
}



export default WeatherDisplay;