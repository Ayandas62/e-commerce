import React from "react";
import './Css/Loginsignup.css';

const LoginSignup = ()=>{
    return(
        <div className="login">
            <div className="loginsignup-container">
                <h1>Sign-up</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder="Your Name" name="" id="" />
                    <input type="email" placeholder="xyz@gmail.com" id="" />
                    <input type="password" placeholder="*******" />
                </div>
                <button>Continue</button>
                <p className="loginsignup-login">
                    Already have an account ? <span>Login</span>
                </p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id="" />
                    <p> By continuing I Agree to the terms of use the privacy & policy</p>
                </div>
            </div>
        </div>
    )
};

export default LoginSignup