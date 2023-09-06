import React from "react";
import Lottie from "lottie-react";
import Fogy from "../../animations/fog.json";
import '../../css/weatherTypes.css';


const Fog = () => {

    return (
        <div id="fog-container">

            <Lottie className="fog-icon" loop={true} animationData={Fogy} />
            <div className="foggy-background">
                
            </div>
        </div>
    )
}


export default Fog;