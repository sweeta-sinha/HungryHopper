import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FOOD_APP_LOGO } from "../assets";
import UserContext from "../utils/userContext";

export const Header = () => {
  const { isLoggedIn , toggleLogin } = useContext(UserContext);

  const logIn = () => {
    // api call to authenticate
    toggleLogin("Sweeta")
  };

  const logOut = () => {
    // api call to authenticate
    toggleLogin("Default User")
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
            <button className="px-4 hover:text-sky-500" onClick={logOut}>
              Logout
            </button>
          ) : (
            <button className="px-4 hover:text-sky-500" onClick={logIn}>
              Login
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
