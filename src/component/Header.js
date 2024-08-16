import React, { useEffect } from "react";
import image_logo from "../../public/images/site_Logo_jpeg.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const handleClick = () => {
    btnName === "Logout" ? setBtnName("Login") : setBtnName("Logout");
  };

  return (
    <div className="flex justify-between bg-green-100 shadow-lg mb-2">
      <div className="logo-container">
        <img
          src={image_logo}
          className="logo"
          alt="Logo"
          width={100}
          height={100}
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About us</Link>{" "}
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/#">Cart</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <button className="px-4" onClick={handleClick}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
