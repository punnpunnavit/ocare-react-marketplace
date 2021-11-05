import React from "react";
//router

//global style
import { GlobalStyle } from "./Helpers/Globalstyles";
//pages

import SignUpPage from "./Pages/SignUpPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import PrivateRoute from "./Helpers/PrivateRoute";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage";
import UpdateProfilePage from "./Pages/UpdateProfilePage";
import { AuthProvider } from "./Context/AuthContext";

import MainFeed from "./Pages/MainFeed";
import ProductDetail from "./Pages/ProductDetail";
import AddProducts from "./Pages/AddProductsPage";
import EditProfile from "./Pages/EditProfile";
import ErrorBoundary from "./Helpers/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/signup" component={SignUpPage} />
            <Route
              exact
              path="/forgot-password"
              component={ForgotPasswordPage}
            />
            <Route exact path="/" component={LoginPage} />
            <PrivateRoute exact path="/home" component={MainFeed} />
            <PrivateRoute exact path="/addproducts" component={AddProducts} />
            <PrivateRoute exact path="/editprofile" component={EditProfile} />
            <PrivateRoute exact path="/blogs/:id" component={ProductDetail} />
            <Route
              path="*"
              component={() =>
                "This page endpoint doesn't exist,please enter the endpoint correctly"
              }
            />
          </Switch>
        </AuthProvider>
      </Router>
      <GlobalStyle />
    </div>
  );
}

export default App;
