import React from "react";
import '../../../assets/styles/Login.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
function Login() {
    const navigate = useNavigate();
    const login =() => {
        navigate("/");
    }
    return (
        <form onSubmit={login}>
            <div className="loginBody">
                <div className="inputBox">
                    <input type="text" required></input>
                    <span>Username</span>
                </div>
                <div className="inputBox">
                    <input type="password" required></input>
                    <span>Password</span>
                </div>
                <Button type="submit" className="buttonLogin" variant="secondary">Login</Button>{' '}
            </div>
        </form>
    );
}

export default Login;
