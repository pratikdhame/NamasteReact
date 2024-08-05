import React from "react";
import image_logo from "../../public/images/site_Logo_jpeg.jpg";
import { useState } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const handleClick = () => {
    btnName === "Logout" ? setBtnName("Login") : setBtnName("Logout");
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img
          src={image_logo}
          className="logo"
          alt="Logo"
          width={100}
          height={100}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login-btn" onClick={handleClick}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
