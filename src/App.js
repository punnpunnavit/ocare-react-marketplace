import React from "react";
//router
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
//global style
import { GlobalStyle } from "./Globalstyles/Globalstyles";
//pages
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";

function App() {
  return (
    <div className="App">
      <SignUpPage />
      <GlobalStyle />
    </div>
  );
}

export default App;
