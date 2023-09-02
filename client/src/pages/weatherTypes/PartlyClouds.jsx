import React from "react";
import Lottie from "lottie-react";
import sun from "../../animations/sun.json";
import '../../css/weatherTypes.css';


const PartlyCloudy = () => {




  return (
    <div id="partly-cloudy">

      <Lottie className="sun" loop={true} animationData={sun}/>

    </div>
  )

}







export default PartlyCloudy;