import React from "react";
import Lottie from "lottie-react";
import Rain from "../../animations/rain.json" 
import '../../css/weatherTypes.css';


const Rainy = () => {

  return (
    <div id="rainy">
      <Lottie className="rain" loop={true} animationData={Rain}/>
    </div>
  )

}







export default Rainy;