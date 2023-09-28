import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./Navbar.css";
import logo from "../assets/logo.png";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="links">
        <Link to="/"> HOME </Link>
        <Link to="/About"> ABOUT </Link>
        <Link to="/Contact"> CONTACT </Link>
        <Link to="/Shop"> SHOP </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
        <Link to="/Login"> LOGIN </Link>
        <Link to="/Signup"> SIGN UP </Link>
      </div>
    </div>
  );
};

export default Navbar;
