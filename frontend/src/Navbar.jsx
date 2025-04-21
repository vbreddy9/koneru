import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import mlogo from "./assets/logo.webp";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <a href="/">
          <img src={mlogo} alt="Logo" className="logo" />
        </a>
      </div>
      <div className="navbar-right">
        <a href="tel:+19198519690" className="phone-link">
          <FaPhoneAlt /> (919)-851-9690
        </a>
      </div>
    </header>
  );
};

export default Navbar;
