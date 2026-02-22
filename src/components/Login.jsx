import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    // Simple validation
    if (!username || !password) {
      setLoginMessage("Please fill in all fields");
      return;
    }

    // Demo login (no backend needed)
    try {
      localStorage.setItem("username", username);
      localStorage.setItem("isLoggedIn", "true");

      alert("Thank you for joining us! Hope you enjoy the Ice-cream!");

      // Clear form
      setUsername("");
      setPassword("");
      setLoginMessage("");

      // Navigate to products page
      navigate("/Products");
    } catch (error) {
      setLoginMessage("Login failed. Please try again.");
    }
  }

  return (
    <div>
      <div className="login-container">
        <div className="login-header">
          <h1>Login</h1>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <input
            className="usernameLogin"
            type="text"
            required
            placeholder="Username *"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            className="passwordLogin"
            type="password"
            required
            placeholder="Password *"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {loginMessage && (
            <div
              style={{ color: "red", textAlign: "center", fontSize: "14px" }}
            >
              {loginMessage}
            </div>
          )}

          <button className="loginButton" type="submit">
            Login
          </button>
        </form>
      </div>

      <div className="register-link-container">
        <h3 style={{ fontSize: "16px" }}>Not a User Yet?</h3>
        <Link to="/SignUp" className="link">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Login;
