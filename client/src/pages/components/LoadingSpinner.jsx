import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import "../../css/PrivateRoutes.css"

const LoadingSpinner = () => {
    return (
        <div className="loading-spinner">

            <ThreeDots
                className="spinner"
                color="#00BFFF"
                height={100}
                width={100}
            />

        </div>
    );
};

export default LoadingSpinner;
