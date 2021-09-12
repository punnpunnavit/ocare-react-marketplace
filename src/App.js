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
            <PrivateRoute
              path="/update-profile"
              component={UpdateProfilePage}
            />

            <Route exact path="/" component={MainFeed} />

            <Route exact path="/addproducts" component={AddProducts} />
            {/* finish add product api */}
            <Route exact path="/editprofile" component={EditProfile} />
              {/* finish edit profile product api */}


            {/* <Route exact path="/" component={MainFeed} /> */}
            <Route path="/blogs/:id" component={ProductDetail} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/forgot-password" component={ForgotPasswordPage} />
               {/* finish forget password api */}
          </Switch>
        </AuthProvider>
      </Router>
      <GlobalStyle />
    </div>
  );
}

export default App;
