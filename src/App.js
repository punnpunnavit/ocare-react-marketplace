import React from "react";
//router

//global style
import { GlobalStyle } from "./Helpers/Globalstyles";
//pages

import SignUpPage from "./Pages/SignUpPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import PrivateRoute from "./Helpers/PrivateRoute";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage";
import UpdateProfilePage from "./Pages/UpdateProfilePage";
import { AuthProvider } from "./Context/AuthContext";

import MainFeed from './Pages/MainFeed'
import Profile from './Components/Profile'
import ProductFeed from './Components/ProductFeed'
function App() {
  return (
    <div className="App">
      
      <Router>
<AuthProvider>
  <Switch>
    <PrivateRoute
      path="/update-profile"
      component={UpdateProfilePage}
    />
    {/* <PrivateRoute exact path="/" component={HomePage} /> */}
    <PrivateRoute exact path="/" component={MainFeed} />
    
    <Route path="/signup" component={SignUpPage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/forgot-password" component={ForgotPasswordPage} />
  </Switch>
</AuthProvider>
</Router>
<GlobalStyle />
    </div>
  );
}

export default App;


