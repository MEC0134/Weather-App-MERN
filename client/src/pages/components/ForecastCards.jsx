import React from "react";



const ForecastCard = (props) => {

    return (
        <>
            <div key={props.key} className="forecast-card">
                <p className="forecast-day">{props.day}</p>
                <img
                    className="forecast-icon"
                    src={"https://openweathermap.org/img/wn/" + props.icon + ".png"}
                />
                <p className="forecast-minmax">{props.min}&#8451;, {props.max}&#8451;</p>
            </div>
        </>
    )
}


export default ForecastCard;