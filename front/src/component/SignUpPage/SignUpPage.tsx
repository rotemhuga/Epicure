import React, { useEffect } from "react";
import "./SignUpPage.css";
import validator from 'validator';
import PasswordChecklist from "react-password-checklist"
import { useState } from "react";
import Navbar from "../navbar/all_navbar/navbar";


const SignUpPage = () => {
    const [count, setCount] = useState(0)
    const [allUserInputs, setAllUserInputs] = useState({
        firstName: "",
        lastName: "",
        emailAddress: "",
        shippingAddress: "",
        password: "",
    })

    const handleInputChange = async (event:any) => {
        event.preventDefault()
        setAllUserInputs({
            firstName:  event.target[0].value,
            lastName: event.target[1].value,
            emailAddress: event.target[2].value,
            shippingAddress: event.target[3].value,
            password: event.target[4].value,
        }) 
        setCount(prevCount => prevCount + 1);
        console.log(allUserInputs)      
    }; 

    useEffect(()=> {
        console.log(allUserInputs)      
        if (count >= 1) {
            fetch("http://localhost:8000/epicure/users", {
                method: 'POST',
                body: JSON.stringify(allUserInputs),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then ((response) => {
                return response.json()
            }) 
            .then ((data) => {
                console.log(data); // log the response data to the console
            }) 
            .catch((error)=> {
                console.log(error.massage);
            })
            }
    },[allUserInputs, count])
        
    return (
        <>
            <div>
                <Navbar />
            </div>
            <form className="Sign-in-container" onSubmit={handleInputChange}>
                <div className="sign-in-title">SIGN UP</div>
                <div className="sign-in-sub-title">To continue order, please sign up</div>
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
                        <input type="text" className="user-email" placeholder={"Email Adress"} />
                    </div>
                </div>
                <div>
                    <div className="address-container">
                        <input type="text" className="user-address" placeholder="Shipping Address"/>
                    </div>
                </div>
                <div>
                    <div className="password-container">
                        <input type="password" className="user-password" placeholder={"Password"} />
                    </div>
                </div>
                <div className="sign-up-container">
                    <button type="submit" className="sign-up-button">SIGN UP</button>
                </div>
            </form>
        </>
    )   
}
export default SignUpPage 

// import React, { useEffect } from "react";
// import "./SignUpPage.css";
// import validator from 'validator';
// import PasswordChecklist from "react-password-checklist"
// import { useState } from "react";
// import Navbar from "../navbar/all_navbar/navbar";


// const SignUpPage:any  = (data:any) => {
//     const [count, setCount] = useState(0)
//     const [allUserInputs, setAllUserInputs] = useState({
//         firstName: "",
//         lastName: "",
//         emailAddress: "",
//         shippingAddress: "",
//         password: "",
//     })

//     useEffect(()=> {
//         console.log("use effect happened");
//         console.log(allUserInputs)
//         if (count >= 1) {
//           fetch("http://localhost:8000/epicure/signup/users", {
//             method: 'POST',
//             body: JSON.stringify(allUserInputs),
//             headers: {
//               'Content-type': 'application/json; charset=UTF-8',
//             },
//           })
//           .then((response) => {
//             return response.json();
//           }) 
//           .then((data) => {
//             return data;
//           }) 
//           .catch((error)=> {
//             console.log(error.message);
//           });
//         }
//       }, [allUserInputs, count]);
    
//     const handleInputChange = async (event:any) => {
//         event.preventDefault()
//             setAllUserInputs({
//             firstName:  event.target[0].value,
//             lastName: event.target[1].value,
//             emailAddress: event.target[2].value,
//             shippingAddress: event.target[3].value,
//             password: event.target[4].value,  
//         })
//         setCount(prevCount => prevCount + 1);

//     //     const [emailError, setEmailError] = useState('')
//     //     const validateEmail = (e:any) => {
//     //     const email = e.target.value
//     //     if (validator.isEmail(email)) {
//     //     setEmailError('Valid Email')
//     //     } else {
//     //     setEmailError('Enter valid Email!')
//     //     }
//     // }
    
// // function userInputsFunc() {

//  return (
//     <>
//     <div>
//         <Navbar />
//     </div>
//     <form className="Sign-in-container" onSubmit={handleInputChange}>
//         <div className="sign-in-title">SIGN UP</div>
//         <div className="sign-in-sub-title">To conitnue order, please sign in</div>
//         <div className="names-container">
//             <div className="first-name-container">
//                 <input type="text" className="user-first-name" placeholder={"First Name"}/>
//             </div>
//             <div className="last-name-container">
//                 <input type="text" className="user-last-name" placeholder={"Last Name"}/>
//             </div>
//         </div>
//         <div>
//             <div className="email-container">
//                 <input type="text" className="user-email" placeholder={"Email Adress"}
//                     >
//                 </input>
//                     {/* {emailError} */}
//             </div>
//         </div>
//         <div>
//             <div className="address-container">
//                 <input type="text" className="user-address" placeholder="Shipping Address"/>
//             </div>
//         </div>
//         <div>
//             <div className="password-container">
//                 <input type="text" className="user-password" placeholder={"Password"}/>
//             </div>
//         </div>
//         <div className="sign-up-container">
//             {/* <button type="submit" className="sign-up-button" onClick={userInput}>SIGN UP</button> */}
//             <button type="submit" className="sign-up-button">SIGN UP</button>
//         </div>
//     </form>
//     </>
//  )   
// }
// }
// export default SignUpPage  

