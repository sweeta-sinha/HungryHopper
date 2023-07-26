import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { FOOD_APP_LOGO } from "../assets";
import useLocalStorage from './../utils/useLocalStorage';

export const Header = () => {
  // const [setLocalStorageData , getLocalStorageData] = useLocalStorage();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loggedInUser = () => {
    // api call to authenticate
    setIsLoggedIn((isLoggedIn) => !isLoggedIn);
  };


  return (
    <div className="flex justify-between items-start shadow-lg mb-4 md:max-xl:bg-blue-300 bg-pink-100">
      <div className="pl-16">
        <img className="w-20 bg-transparent" src={FOOD_APP_LOGO} alt="logo" />
      </div>
      <div className="flex h-full items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 hover:text-sky-500">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4 hover:text-sky-500">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="px-4 hover:text-sky-500">
            {" "}
            <Link to={"/contact-us"}>Contact Us</Link>
          </li>
          <li className="px-4 hover:text-sky-500">
            {" "}
            <Link to={"/instamart"}>Instamart</Link>
          </li>
          <li className="px-4 hover:text-sky-500">Cart</li>
          {isLoggedIn ? (
            <button className="px-4 hover:text-sky-500" onClick={loggedInUser}>Logout</button>
          ) : (
            <button className="px-4 hover:text-sky-500" onClick={loggedInUser}>Login</button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
