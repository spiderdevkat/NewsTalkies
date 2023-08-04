import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../AuthContext";

function Signup() {
  const history = useNavigate();
  const { handleLogin } = useAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
        
      const response = await axios.post("http://localhost:8000/signup", {
        username,
        email,
        password,
      });

      if (response.data.status === "success") {
        // Access the user's information from the response
        const { user } = response.data;
        console.log("Response from the server:", response.data);

        // Call setIsLoggedIn to update the state in the AuthContext
        handleLogin(user);

        // Redirect the user or perform other actions
        history("/", { state: { id: user.email } });
      } else if (response.data.status === "error") {
        // Display the error message received from the backend
        setError(response.data.message);
        console.error(error);
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
      console.error(error);
    }
  }

  return (
    <div className="login">
      <h1>Signup</h1>
      {error && <p className="error-message">{error}</p>}
      <form action="POST">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input type="submit" onClick={submit} />
      </form>
      <br />
      <p>OR</p>
      <br />
      <Link to="/login">Login Page</Link>
    </div>
  );
}

export default Signup;
