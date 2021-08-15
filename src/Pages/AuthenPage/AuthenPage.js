import React from "react";
import { AuthProvider } from "../../Context/AuthContext";
import SignUp from "../../Components/SignUpCard";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../Dashboard";
import Login from "../../Components/LoginCard";
import PrivateRoute from "../../Helpers/PrivateRoute";
import ForgotPassword from "../../Components/ForgotPasswordCard";
import UpdateProfile from "../UpdateProfile";

const SignUpPage = () => {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        backgroundImage: "url('https://picsum.photos/id/970/800/1900?grayscale&blur=2')",
        minWidth: "100vw",
      }}
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
    </Container>
  );
};

export default SignUpPage;
