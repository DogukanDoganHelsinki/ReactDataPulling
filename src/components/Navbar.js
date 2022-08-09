import React from "react";
import logo from "../images/logo2.png";

function Navbar() {
  return (
    <nav className="nav--container">
      <img className="nav--logo" src={logo} alt="Hollywood logo" />
      <ul className="nav--list">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#news">Categories</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
        <input className="nav-search" type="text" placeholder="Search.." />
      </ul>
    </nav>
  );
}

export default Navbar;
