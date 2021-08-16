import React from "react";
import { AuthProvider } from "../../Context/AuthContext";
import SignUp from "../../Components/SignUpCard";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../HomePage/Dashboard";
import Login from "../../Components/LoginCard";
import PrivateRoute from "../../Helpers/PrivateRoute";
import ForgotPassword from "../../Components/ForgotPasswordCard";
import UpdateProfile from "../HomePage/UpdateProfile";
import { StyledContainer } from "./AuthenPage.styles.js";

const SignUpPage = () => {
  return (
    <StyledContainer
      className="d-flex align-items-center justify-content-center"
    >
      <div className="w-100" style={{ maxWidth: "45%", minHeight: "100vh" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <PrivateRoute exact path="/" component={Dashboard} />
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </StyledContainer>
  );
};

export default SignUpPage;
