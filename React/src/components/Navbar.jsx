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
        <Link to="/"> ABOUT </Link>
        <Link to="/"> CONTACT </Link>
        <Link to="/"> SHOP </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
        <Link to="/"> LOGIN </Link>
        <Link to="/"> SIGN UP </Link>
      </div>
    </div>
  );
};

export default Navbar;
