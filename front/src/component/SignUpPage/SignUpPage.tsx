import React from "react";
import "./SignUpPage.css";
import validator from 'validator';
import PasswordChecklist from "react-password-checklist"
import { useState } from "react";
import { useNavigate} from 'react-router-dom';
import Navbar from "../navbar/all_navbar/navbar";

const SignUpPage:React.FC = () => {
        const navigate = useNavigate();
        const [emailError, setEmailError] = useState('')
        const [password, setPassword] = useState("")
        const [passwordAgain, setPasswordAgain] = useState("")
        const validateEmail = (e:any) => {
        const email = e.target.value
        if (validator.isEmail(email)) {
        setEmailError('Valid Email')
        } else {
        setEmailError('Enter valid Email!')
        }
    }

const userInput:any = (event:any) => {
    const details = event
    event.preventDefault()
    console.log(details)
}
 return (
    <>
    <div>
        <Navbar />
    </div>
    <form className="Sign-in-container" onSubmit={userInput}>
        <div className="sign-in-title">SIGN UP</div>
        <div className="sign-in-sub-title">To conitnue order, please sign in</div>
        <div className="names-container">
            <div className="first-name-container">
                <input type="text" className="user-first-name" placeholder={"First Name"}/>
            </div>
            <div className="last-name-container">
                <input type="text" className="user-last-name" placeholder={"Last Name"}/>
            </div>
        </div>
        <div>
            <div className="email-container">
                <input type="text" className="user-email" placeholder={"Email Adress"}
                    onChange={(e) => validateEmail(e)}></input>
                    {emailError}
            </div>
        </div>
        <div>
            <div className="address-container">
                <input type="text" className="user-address" placeholder="Shipping Address"/>
            </div>
        </div>
        <div>
            <div className="password-container">
                <input type="text" className="user-password" placeholder={"Password"}/>
            </div>
        </div>
        <div>
            <div className="password-confirm-container">
                <input type="text" className="user-password" placeholder={"Confirm Password"}/>
            </div>
        </div>
        <div className="sign-up-container">
            {/* <button type="submit" className="sign-up-button" onClick={userInput}>SIGN UP</button> */}
            <button type="submit" className="sign-up-button">SIGN UP</button>
        </div>
    </form>
    </>
 )   
}
export default SignUpPage 

