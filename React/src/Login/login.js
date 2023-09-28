// Create a js file for login page

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const handleLogin = () => {
    axios
      .get("http://localhost:3002/login")
      .then((response) => {
        const users = response.data;
        console.log(users);
        const user = users.find(
          (u) =>
            u.username === username ||
            (u.email === username && u.password === password)
        );
        if (user) {
          setLoginStatus("Login successful!");
          // Redirect to home page

          window.location.href = "/";
          alert("Login successful!");
          Cookies.set("id", user.id, { expires: 7 });
        } else {
          setLoginStatus("Invalid credentials. Please try again.");
          alert("Invalid credentials. Please try again.");
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  return (
    <div className="login">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="login-container">
        <div className="login-form">
          <br />
          <br />
          <br />
          <form>
            <table align="center">
              <tr>
                <td>
                  <label for="username">Username or Email:</label>
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label for="password">Password:</label>
                </td>
                <td>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <button type="submit" onClick={handleLogin}>
                    Login
                  </button>
                </td>
                <td>
                  <p>{loginStatus}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="/">Forgot Password?</Link>
                </td>
                <td>
                  <Link to="/">Don't have an account?</Link>
                </td>
              </tr>
            </table>
          </form>
          <div className="login-links">
            <h1>Don't have an account?</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
