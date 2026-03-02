import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../api/index";
import "./SignUp.css";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [signupMessage, setSignupMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSignUp(e) {
    e.preventDefault();

    if (!username || !password || !email) {
      setSignupMessage("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    setSignupMessage("");

    try {
      const data = await registerUser(username, email, password);

      alert("Thank you for Signing up! Please login.");

      setUsername("");
      setPassword("");
      setEmail("");

      navigate("/Login");
    } catch (error) {
      setSignupMessage(error.message || "Signup failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <h1 className="signup-header">Sign Up</h1>

      <form onSubmit={handleSignUp} className="sign-up-form">
        <input
          type="text"
          required
          placeholder="Username *"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          disabled={isLoading}
        />

        <input
          type="email"
          required
          placeholder="Email *"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />

        <input
          type="password"
          required
          placeholder="Password *"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />

        {signupMessage && (
          <div style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
            {signupMessage}
          </div>
        )}

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Signing up..." : "Sign Up"}
        </button>
      </form>

      <div className="signhere">
        <p>Already have an account?</p>
        <Link
          to="/Login"
          style={{ color: "rgb(210, 105, 184)", textDecoration: "none" }}
        >
          Login here
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
