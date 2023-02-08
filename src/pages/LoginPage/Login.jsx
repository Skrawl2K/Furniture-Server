import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GithubLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
import './Login.css'

const Login = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const submit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:9095/', {
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
            <h2>Login</h2>
            <h3>Enter your credentials</h3>
            <form className="login-form">
                <input
                    spellCheck={false}
                    className="control"
                    type="e-mail"
                    placeholder="E-mail"
                    onChange={e => setEmail(e.target.value)}
                />
                <div className="password">
                    <input
                        spellCheck={false}
                        className="control"
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button
                        className="toggle"
                        type="button"
                        onClick={togglePassword}
                    ></button>
                </div>
                <button onClick={submit} className="control" type="button">LOGIN</button>
            </form>
            <Link to='/signup'> <button>SIGN UP</button></Link>
            <br />
            <GithubLoginButton onClick={() => alert("GitHub")} />
            <GoogleLoginButton onClick={() => alert("Google")} />
        </div >
    )
};

export default Login;
