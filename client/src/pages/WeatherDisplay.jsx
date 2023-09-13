import ClearSky from "./weatherTypes/ClearSky";
import PartlyCloudy from "./weatherTypes/PartlyClouds";
import Rain from "./weatherTypes/Rain";
import ThunderStorm from "./weatherTypes/Thunder";
import Snow from "./weatherTypes/Snow";
import Fog from "./weatherTypes/Fogy";
import OvercastClouds from "./weatherTypes/OvercastClouds";


function WeatherDisplay(props) {

    switch (props.description) {
        case 'clear sky':
            return <ClearSky />;
        case 'rain':
            return <Rain />;
        case 'light rain':
            return <Rain />;
        case 'shower rain':
            return <Rain />;
        case 'thunderstorm':
            return <ThunderStorm />;
        case 'overcast clouds':
            return <OvercastClouds />;
        case 'few clouds':
            return <PartlyCloudy />;
        case 'broken clouds':
            return <OvercastClouds />;
        case 'scattered clouds':
            return <PartlyCloudy />;
        case 'snow':
            return <Snow />;
        case 'mist':
            return <Fog />;
        default:
            return 'Unknown Weather Type';
    }
}



export default WeatherDisplay;