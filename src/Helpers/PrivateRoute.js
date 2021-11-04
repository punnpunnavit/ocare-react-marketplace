import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../Context/AuthContext.js";

export default function PrivateRoute({ component: Component, ...rest }) {
    const { isLoggedIn } = useAuth()
  
    return (
      <Route
        {...rest}
        render={props => {
          return isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
        }}
      ></Route>
    )
  }