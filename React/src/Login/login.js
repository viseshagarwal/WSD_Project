// Create a js file for login page

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import signinImg from "../assets/signin-image.jpg";
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
      {/* <div className="login-container">
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
      </div> */}
      <div class="main">
        <section class="sign-in">
          <div class="container">
            <div class="signin-content">
              <div class="signin-image">
                <figure>
                  <img src={signinImg} alt="sing up image" />
                </figure>
                <a href="/Signup" class="signup-image-link">
                  Create an account
                </a>
              </div>

              <div class="signin-form">
                <h2 class="form-title">Login</h2>
                <form method="POST" class="register-form" id="login-form">
                  <div class="form-group">
                    <input
                      type="text"
                      name="username"
                      id="your_name"
                      placeholder="Username or Email"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div class="form-group">
                    <label for="your_pass">
                      <i class="zmdi zmdi-lock"></i>
                    </label>
                    <input
                      type="password"
                      name="your_pass"
                      id="your_pass"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="checkbox"
                      name="remember-me"
                      id="remember-me"
                      class="agree-term"
                    />
                    <label for="remember-me" class="label-agree-term">
                      <span>
                        <span></span>
                      </span>
                      Remember me
                    </label>
                  </div>
                  <div class="form-group form-button">
                    <input
                      type="submit"
                      name="signin"
                      id="signin"
                      class="form-submit"
                      value="Log in"
                      onClick={handleLogin}
                    />
                  </div>
                </form>

                {/* <div class="social-login">
                  <span class="social-label">Or login with</span>
                  <ul class="socials">
                    <li>
                      <a href="#">
                        <i class="display-flex-center zmdi zmdi-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="display-flex-center zmdi zmdi-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="display-flex-center zmdi zmdi-google"></i>
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
