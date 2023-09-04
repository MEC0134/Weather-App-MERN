import React from "react";
import Lottie from "lottie-react";
import Thunder from "../../animations/thunderstorm.json"
import Rain from "../../animations/rain.json"
import '../../css/weatherTypes.css';


const ThunderStorm = () => {

    return (
        <div id="thunder-storm">

            <Lottie className="thunder" loop={true} animationData={Thunder} />
            <Lottie className="thunder-rain" loop={true} animationData={Rain} />


        </div>
    )

}




export default ThunderStorm;