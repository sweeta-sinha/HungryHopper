import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";

export const Header = () => {
  const [isLoggedIn , setIsLoggedIn] = useState(false)

  const loggedInUser = () =>{
    // api call to authenticate
    setIsLoggedIn((isLoggedIn) => !isLoggedIn)
  }

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
      {
        (isLoggedIn ? <button onClick={loggedInUser}>Logout</button> : <button onClick={loggedInUser}>Login</button>)
      }
    </div>
  );
};

export default Header;
