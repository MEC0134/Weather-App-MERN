import React from "react";
import Lottie from "lottie-react";
import Cloudy from "../../animations/cloudy.json";
import '../../css/weatherTypes.css';


const PartlyCloudy = () => {


  return (
    <div id="partly-cloudy">

      <Lottie className="sun" loop={true} animationData={Cloudy} />


    </div>
  )

}







export default PartlyCloudy;