import React, { useState, useContext, useEffect } from "react";
import { auth } from "../Services/Auth/Firebase";
import AuthAPI from "../Services/Auth/AuthAPI";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signUp(email, password) {
    return AuthAPI.signUp(email, password);
  }

  function login(email, password) {
    return AuthAPI.login(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
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
      return data;
    });
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signUp,
    login,
    logout,
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
