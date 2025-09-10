// context/UserContext.jsx
import React, { createContext, useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPath";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const updateUser = (userData) => {
    setUser(userData);
    setLoading(false);
  };

  const clearUser = () => {
    setUser(null);
    setLoading(false);
  };

  // initialize user on app load (or when token changes)
  useEffect(() => {
    let isMounted = true;

    const init = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          if (isMounted) clearUser();
          return;
        }

        // GET_INFO should use axiosInstance which will add Authorization header
        const res = await axiosInstance.get(API_PATHS.Auth.GET_INFO);
        if (isMounted && res?.data) {
          setUser(res.data);
          setLoading(false);
        } else if (isMounted) {
          clearUser();
        }
      } catch (err) {
        console.error("User init failed:", err);
        if (isMounted) clearUser();
      }
      
    };

    init();

    return () => {
      isMounted = false;
    };
  }, []); // run once on mount

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        updateUser,
        clearUser,
        setLoading, // optional
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
