import './SignUpPage.css'
import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom';

const SignUpPage = () => {
    const usernames = [""];
    const [spinnerClass, setSpinnerClass] = useState("spinner");
    const [alertClass, setAlertClass] = useState("alert");
    const spinnerRef = useRef(null);
    const alertRef = useRef(null);
    let timeoutId = null;

    const updateUi = (value) => {
        console.log("value", value);
        setSpinnerClass("spinner");

        const usernameExists = usernames.some((u) => u === value);
        console.log("usernames", usernames);
        console.log("usernameExists", usernameExists);

        if (usernameExists) {
            setAlertClass("alert visible");
        } else {
            setAlertClass("alert");
        }
    };

    const handleStartTyping = () => {
        setSpinnerClass("spinner visible");
    };

    const handleChange = (event) => {
        const { value } = event.target;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => updateUi(value), 500);
    };

    const submit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:9095/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    // data to send in the request body
                })
            });

            if (!response.ok) {
                throw new Error(response.statusText);
            }

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="login-card">
            <h2>Sign Up</h2>
            <h3>Enter your credentials</h3>
            <form className="login-form">
                <div className="username">
                    <input
                        spellCheck={false}
                        className="control"
                        type="text"
                        placeholder="Username"
                        onChange={handleChange}
                        onKeyDown={handleStartTyping}
                    />
                    <div ref={spinnerRef} className={spinnerClass} id="spinner"></div>
                </div>
                <div ref={alertRef} className={alertClass} id="alert">Username already exists</div>
                <input
                    spellCheck={false}
                    className="control"
                    id="password"
                    type="password"
                    placeholder="Password"
                />
                <button type='submit' className="control">SIGN UP</button>
            </form>
            <Link to='/'> <button>back to LOGIN</button></Link>
        </div>
    )
};

export default SignUpPage;
