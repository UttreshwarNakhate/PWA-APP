// UserContext.js
import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const addUserDetails = (details) => {
    setUser(details);
  };

  return (
    <UserContext.Provider value={{ user, addUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};
