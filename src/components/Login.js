import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../AuthContext";

function Login() {
  const history = useNavigate();
  const { handleLogin } = useAuth(); // Accessing the context hook

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });

      if (response.data.status === "success") {
        // Access the user's information from the response
        const { user } = response.data;

        // Call handleLogin with the email or username (customize it as needed)
        handleLogin(user);

        // Redirect the user or perform other actions
        history("/", { state: { id: user._id } });
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
      console.error(error);
    }
  }

  return (
    <div className="login">
      <h1>Login</h1>
      {error && <p className="error-message">{error}</p>}
      <form action="POST" className="login-form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="login-input"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="login-input"
        />
        <input type="submit" onClick={submit} className="login-button" />
      </form>
      <br />
      <p>OR</p>
      <br />
      <Link to="/signup" className="login-link">
        Signup Page
      </Link>
    </div>
  );
}

export default Login;
