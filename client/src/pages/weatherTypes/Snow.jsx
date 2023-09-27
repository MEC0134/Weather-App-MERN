import React from "react";
import Lottie from "lottie-react";
import Snow from "../../animations/snow.json"
import '../../css/weatherTypes.css';


const Snowy = () => {




  return (
    <div id="snow">
      <Lottie className="snow" loop={true} animationData={Snow}/>
    </div>
  )

}







export default Snowy;