import React, { useState } from "react";
import "../../../assets/styles/Login.css";
import Button from "react-bootstrap/Button";
import { Link, useNavigate, Location, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

function Login() {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  let onFirstTimeUsername = true;
  let onFirstTimePassword = true;
  const from = location.state?.from?.pathname || "/";
  const login = (event) => {
    const user = {
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
      role: "USER",
    };
    // const API_Response = {
    //   toke :"",
    //   refreshToken:"",
    //   username:"",
    //   role:"",
    //   isFirstTime:""
    // }
    const role = "ADMIN";
    setAuth({ user, role });
    localStorage.setItem("user", JSON.stringify(user));
    event.preventDefault();
    navigate(from, { replace: true });
  };
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  function checkInput(input, err) {
    var format = /[!-\/:-@[-`{-~]/;
    const username = document.getElementById(input).value;
    if (username.trim() === "") {
      document.getElementById(err).innerHTML = "Please input your username!";
    } else if (username.length < 8) {
      document.getElementById(err).innerHTML = "The min length is 8 character!";
    } else if (username.length > 60) {
      document.getElementById(err).innerHTML =
        "The max length is 60 character!";
    } else if (format.test(username)) {
      document.getElementById(err).innerHTML =
        "Only accept letters and digits!";
    } else {
      if(input === "username") {
        onFirstTimeUsername = false;
      }
      else{
        onFirstTimePassword = false;
      }
      document.getElementById(err).innerHTML = "";
    }
  }
  function formChange() {
    const username = document.getElementById("errUsername").innerHTML;
    const password = document.getElementById("errPassword").innerHTML;
    if (username === "" && password === "" && onFirstTimeUsername === false && onFirstTimePassword === false) {
      document.getElementById("loginButton").disabled = false;
    } else {
      document.getElementById("loginButton").disabled = true;
    }
  }
  return (
    <form onChange={formChange} onSubmit={login}>
      <div className="loginBody">
        <div className="inputBox">
          <input
            id="username"
            onChange={() => checkInput("username", "errUsername")}
            type="text"
            required
          ></input>
          <span>Username</span>
        </div>
        <div className="err" id="errUsername">
          {/* Please input your username! */}
        </div>
        <div className="inputBox">
          <input
            id="password"
            onChange={() => checkInput("password", "errPassword")}
            type="password"
            required
          ></input>
          <span>Password</span>
        </div>
        <div className="err" id="errPassword">
          {/* Please input your password! */}
        </div>
        <Button
          disabled
          id="loginButton"
          type="submit"
          className="buttonLogin"
          variant="secondary"
        >
          Login
        </Button>{" "}
      </div>
    </form>
  );
}

export default Login;
