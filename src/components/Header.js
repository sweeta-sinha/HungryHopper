import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loggedInUser = () => {
    // api call to authenticate
    setIsLoggedIn((isLoggedIn) => !isLoggedIn);
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            {" "}
            <Link to={"/contact-us"}>Contact Us</Link>
          </li>
          <li>Cart</li>
          {isLoggedIn ? (
            <button onClick={loggedInUser}>Logout</button>
          ) : (
            <button onClick={loggedInUser}>Login</button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
