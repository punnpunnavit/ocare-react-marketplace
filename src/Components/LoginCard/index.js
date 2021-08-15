import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../Context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { Wrapper, CardWrapper } from "./LoginCard.styles";
import {
  ContentWrapper,
  StyledButton,
  StyledForm,
  StyledLink,
} from "../LoginCard/LoginCard.styles";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to sign in");
    }
    setLoading(false);
  }
  return (
    <>
     
          <div style={{minHeight: "100vh"}}>
            <Card.Body>
              <h1 className="text-center mb-1" style={{fontSize: "50px",color: "#534683"}}>OCARE</h1>
              <h1 className="text-center mb-4" style={{fontSize: "50px",color: "#534683"}}>MARKETPLACE</h1>
              <h5 className="text-center mb-4">Sign-in with your Email</h5>
              {error && <Alert variant="danger">{error}</Alert>}
              <StyledForm onSubmit={handleSubmit}>
                <StyledForm.Group id="email" className="text-center mb-4">
                  <StyledForm.Control
                    type="email"
                    ref={emailRef}
                    required
                    placeholder="Email"
                  ></StyledForm.Control>
                </StyledForm.Group>
                <StyledForm.Group id="password">
                  <StyledForm.Control
                    type="password"
                    ref={passwordRef}
                    required
                    placeholder="Password"
                  ></StyledForm.Control>
                </StyledForm.Group>
                <div className="w-100 text-center mt-3">
                  <StyledLink to="/forgot-password" className="mb-100">
                    Forgot your Password?
                  </StyledLink>
                </div>

                <StyledButton
                  disabled={loading}
                  className="w-100"
                  type="submit"
                  style={{marginTop:"10px"}}
                >
                  SIGN IN
                </StyledButton>
              </StyledForm>

 <div className="w-100 text-center mt-2">
            Need an account? <StyledLink to="/signup">Sign Up</StyledLink>
          </div>
            </Card.Body>
          </div>
         
        
    </>
  );
}

export default Login;
