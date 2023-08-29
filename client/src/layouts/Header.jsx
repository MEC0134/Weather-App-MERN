import React from "react";
import AirIcon from '@mui/icons-material/Air';
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header>
            <h1>
                <NavLink className="home-link" to="/">
                    Clima
                    <AirIcon className="logo-icon" fontSize="medium"  />
                </NavLink>
            </h1>
        </header>
    )
}


export default Header;