import React, { useEffect, useState, createContext, useContext } from "react";
import { auth } from "../Services/firebase";

export const AuthContext = createContext(null);

export const AuthProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const { email, displayName, photoURL, uid } = user;
        setUser({ email, displayName, photoURL, uid });
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={user}>
      <div>{props.children}</div>
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
    return useContext(AuthContext)
  }
