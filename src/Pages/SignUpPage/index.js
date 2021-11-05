import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../Context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import {
  StyledForm,
  StyledContainer,
  StyledButton,
  StyledLink,
} from "./SignUpCard.styles";

function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signUp, getAccessToken } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Password do not match");
    }

    try {
      setError("");
      setLoading(true);
      const res = await signUp(
        emailRef.current.value,
        passwordRef.current.value
      );
      window.localStorage.setItem("accessToken", res.data.userToken);
      console.log(window.localStorage.getItem("accessToken"));
      console.log('autumn air')
      history.push("/home");
    } catch {
      setError("Failed to create an account");
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
            <p className="text-center mb-3">Sign-up with your Email</p>
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
              <StyledForm.Group id="password">
                <StyledForm.Control
                  type="password"
                  ref={passwordConfirmRef}
                  required
                  placeholder="Confirm Password"
                  className="mb-3"
                ></StyledForm.Control>
              </StyledForm.Group>

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
                SIGN UP
              </StyledButton>
            </StyledForm>

            <p className="w-100 text-center mt-4">
              Already have an account{" "}
              <StyledLink to="/">Sign In</StyledLink>
            </p>
          </div>
        </Card.Body>
      </Card>
    </StyledContainer>
  );
}

export default SignUp;
