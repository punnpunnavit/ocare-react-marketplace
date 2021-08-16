import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../Context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { StyledForm,StyledButton } from "./SignUpCard.styles";

function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signUp } = useAuth();
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
      await signUp(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }
  return (
    <>
      <Card>
        <Card.Body style={{ height: "100vh", display: "flex" }}>
          <div
            style={{
              margin: "auto",
              marginTop: "100px",
            }}
          >
            <h1
              className="text-center mb-4"
              style={{ fontSize: "4rem", color: "#534683" }}
            >
              OCARE
              <br />
              MARKETPLACE
            </h1>
            <p className="text-center mb-4">Create an account with your Email</p>
            {error && <Alert variant="danger">{error}</Alert>}
            <StyledForm onSubmit={handleSubmit}>
              <StyledForm.Group id="email" className="text-center mb-3">
                <StyledForm.Control
                  type="email"
                  ref={emailRef}
                  placeholder="Email"
                  required
                ></StyledForm.Control>
              </StyledForm.Group >
              <StyledForm.Group id="password"className="text-center mb-3">
                <StyledForm.Control
                  type="password"
                  ref={passwordRef}
                  placeholder="Password"
                  required
                ></StyledForm.Control>
              </StyledForm.Group>
              <StyledForm.Group id="password-confirm">
                <StyledForm.Control
                  type="password"
                  ref={passwordConfirmRef}
                  required
                  placeholder="Password Confirmation"
                ></StyledForm.Control>
              </StyledForm.Group>
              <StyledButton disabled={loading} className="text-center mt-3"  style={{ width: "50%", margin: "0 auto" }} type="submit">
                SIGN UP
              </StyledButton>
            </StyledForm>
            <p className="w-100 text-center mt-2" >
              Already have an account? <Link to="/login">Log In</Link>
            </p>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default SignUp;
