import React, { useContext, useEffect } from "react";
import image_logo from "../../public/images/site_Logo_jpeg.jpg";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  const handleClick = () => {
    btnName === "Logout" ? setBtnName("Login") : setBtnName("Logout");
  };

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="flex justify-between bg-white shadow">
      <div className="logo-container">
        <img
          src={image_logo}
          className="logo"
          alt="Logo"
          width={100}
          height={100}
          style={{ mixBlendMode: "multiply" }}
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

          <li className="relative px-4 self-center">
            <Link to="/cart" className="flex items-center space-x-2">
              <FaShoppingCart className="text-xl" /> {/* Cart icon */}
              <span>Cart</span>
              <span className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full transform translate-x-1/2 -translate-y-1/2">
                {cartItems.length}
              </span>
            </Link>
          </li>

          <li className="px-4 self-center">
            <Link to="/grocery">Grocery</Link>
          </li>

          <button
            className="px-4 py-2 m-4 bg-green-300 rounded-lg"
            onClick={handleClick}
          >
            {btnName}
          </button>
          <li className="px-4 self-center font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
