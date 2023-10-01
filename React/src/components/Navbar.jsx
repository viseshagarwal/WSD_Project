import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, SignOut, SignIn, User } from "phosphor-react";
import "./Navbar.css";
//import logo from "../assets/logo.png";
import logo from "../assets/Victoria's Fragrance-logos/new_logo_transparent.png";
import Cookies from "js-cookie";

export const Navbar = () => {
  //const id = ;
  //console.log(id);
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="links">
        <Link to="/">HOME</Link>
        <Link to="/About"> ABOUT </Link>
        <Link to="/Contact"> CONTACT </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
        <div className="login-buttons-working">
          {Cookies.get("id") == 0 ? (
            <div>
              <Link to="/Login">
                <SignIn size={32} />
              </Link>
              <Link to="/Signup">SIGNUP</Link>
            </div>
          ) : (
            <div>
              <Link to="/Orders">
                <User size={32} />
              </Link>
              <Link to="/Logout">
                <SignOut size={32} />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
