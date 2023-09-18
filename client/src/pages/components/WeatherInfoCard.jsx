import React from "react";


const capitalizeFirstLetter = (word) => {
    if (!word) {
        return ""; 
    }
    const capitalized = word.charAt(0).toUpperCase() + word.slice(1);
    return capitalized;
}

const WeatherInfoCard = (props) => {

    return (
        <>
            <h3>{capitalizeFirstLetter(props.city)}</h3>
            <p>{Math.round(props.temperature)}&deg;C</p>
            <p>{capitalizeFirstLetter(props.description)}</p>
        </>
    )
}


export default WeatherInfoCard;