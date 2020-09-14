import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../login.css";
import { auth } from "./Firebase.js";

const Login = ({ aadharSubmit }) => {
  const history = useHistory();
  const [aadhar, setAadhar] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const login = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/form");
      })
      .catch((e) => alert(e.message));

    aadharSubmit(aadhar);
    localStorage.setItem("AadharCard No: ", aadhar);
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/form");
      })
      .catch((e) => alert(e.message));
    aadharSubmit(aadhar);
    localStorage.setItem("AadharCard No: ", aadhar);
  };

  return (
    <div className="login">
      <div className="login-container">
        <h1>Sign In</h1>
        <form>
          <h3 className="heading_form">Aadhar Number</h3>
          <input
            value={aadhar}
            type="number"
            onChange={(e) => setAadhar(e.target.value)}
          />

          <h3 className="heading_form">Email Id</h3>
          <input
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <h3 className="heading_form">Password</h3>
          <input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="sign_btn" onClick={login}>
            Sign in
          </button>
        </form>
        <p>
          By SignIn, you agree to Conditions of Use and Saving. Please see our
          Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>
        <button className="create_btn" onClick={register}>
          Create your Account
        </button>
      </div>
    </div>
  );
};

export default Login;
