import React from "react";
import AirIcon from '@mui/icons-material/Air';
import { NavLink } from "react-router-dom";

function Header(props) {
    return (
        <header>
            <h1>
                <NavLink className="home-link" to="/">
                    Clima
                    <AirIcon className="logo-icon" fontSize="medium" sx={{ color: "black" }} />
                </NavLink>
            </h1>
            <h2>{props.userName}</h2>
        </header>
    )
}


export default Header;