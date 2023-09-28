// Create a js file for login page

import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="login-container">
          <div className="login-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="login-form">
            <form>
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <button type="submit">Login</button>
            </form>
            <div className="login-links">
              <Link to="/">Forgot Password?</Link>
              <Link to="/">Don't have an account?</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
