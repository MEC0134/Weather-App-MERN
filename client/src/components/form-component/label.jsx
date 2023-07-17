import React from "react";


function FormLabel(props) {

    return <label htmlFor={props.labelFor}>{props.labelName}</label>
}




export default FormLabel;