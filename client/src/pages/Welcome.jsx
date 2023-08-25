import React from "react";
import { NavLink } from 'react-router-dom';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import WbCloudyOutlined from '@mui/icons-material/WbCloudyOutlined';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import '../css/styles.css';


function Welcome() {

    return (
        <div className="welcome-container">
            <div className="welcome-icons">
                <WbSunnyOutlinedIcon className="sun" fontSize="large" />
                <WbCloudyOutlined className="cloud" fontSize="large" />
                <ThunderstormOutlinedIcon className="storm" fontSize="large" />
                <AcUnitOutlinedIcon className="snow" fontSize="large" />
            </div>
            <div className="content inner-cover">
                <main>
                    <h1 className="cover-heading">Welcome to  Clima...</h1>
                    <p className="lead">your favorite weather app.</p>
                    <NavLink className="nav-link register" to="/Register">Register</NavLink>
                    <NavLink className="nav-link login" to="/Login">Login</NavLink>
                </main>
            </div>
        </div>
    );
}


export default Welcome;