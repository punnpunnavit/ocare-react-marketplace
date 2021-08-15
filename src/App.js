import React from "react";
//router
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
//global style
import { GlobalStyle } from "./Helpers/Globalstyles";
//pages
import Home from "./Pages/Home";
import SignUpPage from "./Pages/AuthenPage/AuthenPage";

function App() {
  return (
    <div className="App">
      <SignUpPage />
      <GlobalStyle />
    </div>
  );
}

export default App;
