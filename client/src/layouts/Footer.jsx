import React from "react";


let year = new Date().getFullYear();


function Footer() {

    return (
        <footer><p>Copright &copy;{year}</p></footer>
    )
}

export default Footer;