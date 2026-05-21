import React, { useState } from "react";
import "./style.css";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "admin123") {
      alert("Login Successful!");
      onLogin();
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="container">
      <div className="login-box">
        <h2>Sign In</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p className="demo">Demo: admin@gmail.com / admin123</p>
      </div>
    </div>
  );
}

export default Login;
