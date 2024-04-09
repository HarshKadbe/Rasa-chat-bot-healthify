import React, { useState, createContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Components/Header/Header";

export const LoginContext = createContext();

export function Layout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // Define an array of paths where you want to hide the header
  const pathsToHideHeader = ["/Dashboard","chatbot"];

  // Check if the current location matches any path to hide the header
  const shouldHideHeader = pathsToHideHeader.some(path => location.pathname.includes(path));

  return (
    <LoginContext.Provider value={{ isLoggedIn, handleLogin, handleLogout }}>
      {!shouldHideHeader && <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />}
      <Outlet />
    </LoginContext.Provider>
  );
}
