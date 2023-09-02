import React from "react";
import Lottie from "lottie-react";
import Sun from "../../animations/sun.json";
import Cloudy from "../../animations/cloudy.json";
import '../../css/weatherTypes.css';


const ClearSky = () => {




  return (
    <div id="clear-sky">

      {<Lottie className="sun" loop={true} animationData={Sun}/>}

    </div>
  )

}







export default ClearSky;