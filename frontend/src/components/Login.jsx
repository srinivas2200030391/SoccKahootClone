import React, { useState } from "react";
import "./Login.css";
import { IoLogoGoogle } from "react-icons/io5";
import axios from "axios";
import config from "../config";
const LoginPage = () => {
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [email, setEmail] = useState("");
  const handleToggle = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };
  const checkLogin = async () => {
    try {
      const response = await axios.post(`${config.baseURL}/admin/login`, {
        email: email,
        password: password,
      });
      if (response) {
        alert("Success");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="login-page">
      <div className="login-container">
        <h1 style={{ textAlign: "center", fontFamily: "cursive" }}>Log in</h1>
        <div className="form-group">
          <p
            style={{
              fontWeight: "bold",
              fontSize: "15px",
              fontFamily: "cursive",
              opacity: "0.7",
            }}>
            UserName or email
          </p>
          <input
            type="text"
            style={{
              height: "20px",
              marginTop: "-10px",
            }}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <b>
          {" "}
          <p
            style={{
              fontSize: "15px",
              fontFamily: "cursive",
              marginTop: "-10px",
              opacity: "0.7",
            }}>
            Password
          </p>
        </b>
        <div
          className="form-group"
          style={{
            display: "flex",
            border: "2px solid #e1e8ed",
            width: "104%",
          }}>
          <input
            type={type}
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            style={{
              border: "none",
              outline: "none",
              height: "20px",
            }}
          />
          <span
            className="show-password"
            style={{
              transform: "translateY(5px)",
              marginRight: "10px",
            }}
            onClick={handleToggle}>
            &#128065;
          </span>
        </div>
        <div
          className="form-group"
          style={{
            fontFamily: "cursive",
          }}>
          <span>Forgot password? </span>
          <a
            href="#"
            style={{
              color: "",
              textDecoration: "none",
            }}>
            Reset your password
          </a>
        </div>
        <button
          className="login-btn"
          style={{
            fontFamily: "cursive",
          }}
          onClick={checkLogin}>
          Log in
        </button>
        <div className="divider">or</div>
        <button
          className="provider-btn"
          style={{
            fontFamily: "cursive",
            fontSize: "15px",
          }}>
          <IoLogoGoogle
            style={{
              transform: "translateX(-20px)",
              fontSize: "20px",
            }}
          />
          Continue with Google
        </button>

        <div className="signup-link">
          Don't have an account? <a href="signup">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
