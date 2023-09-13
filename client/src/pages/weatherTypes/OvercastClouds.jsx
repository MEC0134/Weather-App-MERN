import React from "react";
import Lottie from "lottie-react";
import OverCast from "../../animations/overcast.json";
import '../../css/weatherTypes.css';


const OverCastCloud = () => {

  return (
    <div id="overcast-cloudy">

      <Lottie className="overcast-clouds" loop={true} animationData={OverCast}/>
      
    </div>
  )
}







export default OverCastCloud;