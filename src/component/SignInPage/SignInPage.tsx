import React from "react";
import "./SignInPage.css";
import validator from 'validator';
import { useState } from "react";


const SignInPage:React.FC = () => {
        const [emailError, setEmailError] = useState('')
        const validateEmail = (e:any) => {
        const email = e.target.value
        if (validator.isEmail(email)) {
        setEmailError('Valid Email :)')
        } else {
        setEmailError('Enter valid Email!')
        }
    }
 return (
    <div className="Sign-in-container">
        <div className="sign-in-title">SIGN IN</div>
        <div className="sign-in-sub-title">To conitnue order, please sign in</div>
        <input type="text" />
    </div>
 )   
}
export default SignInPage 