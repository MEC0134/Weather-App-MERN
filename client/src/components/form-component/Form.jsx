import React from "react";
import FormInput from "./input";
import FormLabel from "./label";

function Form(props) {

    return (
        <div className="row align-items-center" style={{height: "87vh"}}>
            <div className="mx-auto col-8 col-md-6 col-lg-4 form-frame">
                <h1 className="form-title">{props.formTitle}</h1>
                <form action={props.action} method="POST">
                    <FormLabel labelName="Email" labelFor="useremail" />
                    <FormInput inputType="email" inputName="useremail"  />
                    <FormLabel labelName="Name" labelFor="username" />
                    <FormInput inputType="text" inputName="username" />
                    <FormLabel labelName="Password" labelFor="userpassword" />
                    <FormInput inputType="password" inputName="userpassword" />
                    <FormLabel labelName="Confirm Password" labelFor="confirmpassword" />
                    <FormInput inputType="password" inputName="confirmpassword" />
                    <button class="btn btn-primary submit-btn" type="submit">{props.btnText}</button>
                </form>
            </div>
        </div>
    );
}


export default Form;