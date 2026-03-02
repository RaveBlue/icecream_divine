import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api/index";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    if (!username || !password) {
      setLoginMessage("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    setLoginMessage("");

    try {
      const data = await loginUser(username, password);

      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.user.username);
      localStorage.setItem("isLoggedIn", "true");

      alert("Thank you for joining us! Hope you enjoy the Ice-cream!");

      setUsername("");
      setPassword("");

      navigate("/Products");
    } catch (error) {
      setLoginMessage(error.message || "Login failed. Please try again.");
    } finally {
      setIsLoading(false);
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
            disabled={isLoading}
          />

          <input
            className="passwordLogin"
            type="password"
            required
            placeholder="Password *"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />

          {loginMessage && (
            <div
              style={{
                color: "red",
                textAlign: "center",
                fontSize: "14px",
                marginTop: "10px",
              }}
            >
              {loginMessage}
            </div>
          )}

          <button className="loginButton" type="submit" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
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
