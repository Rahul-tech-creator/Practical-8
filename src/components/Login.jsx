import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {

    e.preventDefault();

    setError("");

    // Validate empty fields
    if (username.trim() === "" || password.trim() === "") {
      setError("Please enter username and password.");
      return;
    }

    // Validate credentials
    if (username === "student" && password === "12345") {

      onLogin();

      navigate("/dashboard");

    } else {

      setError("Invalid username or password.");

    }
  };

  return (
    <div className="login-container">

      <div className="login-card">

        <h1>Student Portal</h1>

        <h2>Login</h2>

        <form onSubmit={handleSubmit}>

          <label>Username</label>

          <input
            type="text"
            value={username}
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Password</label>

          <input
            type="password"
            value={password}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <p className="error">
              {error}
            </p>
          )}

          <button type="submit">
            Login
          </button>

        </form>

        <p className="demo-login">
          Demo Credentials
        </p>

        <p className="demo-login">
          Username: <b>student</b>
        </p>

        <p className="demo-login">
          Password: <b>12345</b>
        </p>

      </div>

    </div>
  );
}

export default Login;
