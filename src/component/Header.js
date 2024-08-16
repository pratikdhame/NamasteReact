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
    <div className="flex justify-between bg-white shadow">
      <div className="logo-container">
        <img
          src={image_logo}
          className="logo"
          alt="Logo"
          width={100}
          height={100}
          style={{ mixBlendMode: 'multiply' }}
        />
      </div>
      <div className="flex items-center">
        <ul className="flex justify-between self-center">
          <li className="px-4 self-center font-mono">
            Online: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-4 self-center">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 self-center">
            <Link to="/about">About us</Link>{" "}
          </li>
          <li className="px-4 self-center">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 self-center">
            <Link to="/#">Cart</Link>
          </li>
          <li className="px-4 self-center">
            <Link to="/grocery">Grocery</Link>
          </li>
          <button className="px-4 py-2 m-4 bg-green-300 rounded-lg" onClick={handleClick}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
