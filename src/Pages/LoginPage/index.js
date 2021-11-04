import React, { useRef, useState } from "react";
import {
  Form,
  Button,
  Card,
  Alert,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import { useAuth } from "../../Context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import {
  StyledButton,
  StyledForm,
  StyledLink,
  StyledContainer,
} from "./LoginCard.styles";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { login, getAccessToken } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      //get token here
      console.log("hey");
      history.push("/home");
      console.log("hey");
    } catch {
      setError("Failed to sign in");
    }
    setLoading(false);
  }
  return (
    <StyledContainer>
      <Card
        style={{
          height: "100vh",
          maxWidth: "700px",
          flexShrink: "0",
          width: "100%",
        }}
      >
        <Card.Body>
          <div
            style={{
              margin: "auto",
              marginTop: "100px",
            }}
          >
            <h1
              className="text-center mb-4"
              style={{ fontSize: "3.75rem", color: "#534683" }}
            >
              OCARE
              <br />
              MARKETPLACE
            </h1>
            <p className="text-center mb-3">Sign-in with your Email</p>
            {error && <Alert variant="danger">{error}</Alert>}
            <StyledForm onSubmit={handleSubmit}>
              <StyledForm.Group className="text-center mb-4">
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
                  className="mb-3"
                ></StyledForm.Control>
              </StyledForm.Group>
              <div className="w-100 text-center mt-3">
                <StyledLink
                  to="/forgot-password"
                  className="mb-100"
                  style={{ fontWeight: "100" }}
                >
                  Forgot your Password?
                </StyledLink>
              </div>

              <StyledButton
                disabled={loading}
                className="mb-3 mt-3"
                type="submit"
                style={{
                  marginTop: "10px",
                  width: "30%",
                  margin: "0 auto",
                }}
              >
                SIGN IN
              </StyledButton>
            </StyledForm>

            <p className="w-100 text-center mt-4">
              Need an account? <StyledLink to="/signup">Sign Up</StyledLink>
            </p>
          </div>
        </Card.Body>
      </Card>
    </StyledContainer>
  );
}

export default Login;
