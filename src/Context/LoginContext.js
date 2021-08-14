import React, { useContext, useState } from "react";

const LoginContext = React.createContext();
const LoginUpdateContext = React.createContext();

//2 custom hooks to provide easy acceess

export function useLogin(){
  return useContext(LoginContext)
}

export function useLoginUpdate(){
  return useContext(LoginUpdateContext)
}

//creating and updating states and pushing it down for children

export function LoginProvider({ children }) {
  const [loginState, setLoginState] = useState(false);

  function toggleLoginState() {
    setLoginState((prevLoginState) => !prevLoginState);
  }

  return (
    <LoginContext.Provider value={loginState}>
      <LoginContext.Provider value={toggleLoginState}>
        {children}
      </LoginContext.Provider>
    </LoginContext.Provider>
  );
}
