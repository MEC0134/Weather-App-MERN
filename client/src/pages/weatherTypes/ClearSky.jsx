import React from "react";
import Lottie from "lottie-react";
import sun from "../../animations/sun.json";
import '../../css/weatherTypes.css';


const ClearSky = () => {




  return (
    <div id="clear-sky">

      <Lottie className="sun" loop={true} animationData={sun}/>

    </div>
  )

}







export default ClearSky;