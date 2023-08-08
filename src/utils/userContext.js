import { createContext, useState } from "react";

const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState("Default User");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleLogin = (userName) => {
    setIsLoggedIn((v) => !v);
    setLoggedInUser(userName);
  };
  return (
    <UserContext.Provider value={{ loggedInUser, isLoggedIn, toggleLogin }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
