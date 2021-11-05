import React, { useState, useContext, useEffect } from "react";
import AuthAPI from "../Services/Auth/AuthAPI";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setLogIn] = useState(false);

  function signUp(email, password) {
    try {
      const res = AuthAPI.signUp(email, password);
      setLogIn(true);
      return res;
    } catch {
      setLogIn(false);
      return "";
    }
  }

  function login(email, password) {
    try {
      const res = AuthAPI.login(email, password);

      setLogIn(true);
      return AuthAPI.login(email, password).then((token) => {
        console.log(token)
        return token;
      });
    } catch {
      setLogIn(false);
      return "";
    }
  }

  function resetPassword(email) {
    return AuthAPI.forgetPassword(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  function getAccessToken() {
    currentUser.getIdToken().then(function (data) {
      window.localStorage.setItem("accessToken", data);
      console.log(data);
      return data;
    });
  }

  useEffect(() => {
    setCurrentUser("wd");
    setLoading(false);
  }, []);

  const value = {
    isLoggedIn,
    signUp,
    login,
    resetPassword,
    updateEmail,
    updatePassword,
    getAccessToken,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
