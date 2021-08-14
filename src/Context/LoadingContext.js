import React, { useContext, useState } from "react";

const LoadingContext = React.createContext();
const LoadingUpdateContext = React.createContext();

//2 custom hooks to provide easy acceess

export function useLoading(){
  return useContext(LoadingContext)
}

export function useLoadingUpdate(){
  return useContext(LoadingUpdateContext)
} 

//creating and updating states and pushing it down for children

export function LoadingProvider({ children }) {
  const [loadingState, setLoadingState] = useState(false);

  function toggleLoadingState() {
    setLoadingState((prevLoadingState) => !prevLoadingState);
  }

  return (
    <LoadingContext.Provider value={loadingState}>
      <LoadingContext.Provider value={toggleLoadingState}>
        {children}
      </LoadingContext.Provider>
    </LoadingContext.Provider>
  );
}