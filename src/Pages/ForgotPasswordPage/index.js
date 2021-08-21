import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../Context/AuthContext";
import { Link } from "react-router-dom";
import { StyledButton,StyledForm,StyledLink } from "./ForgotPasswordCard.styles";
import {StyledContainer} from '../../Components/AuthenPage.styles'


function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your registered E-mail for further instructions");
    } catch {
      setError("Failed to reset password");
    }
    setLoading(false);
  }
  return (
    <StyledContainer className="d-flex align-items-center justify-content-center">
      <div className="w-100" style={{ maxWidth:"45%",minHeight:"100vh"}}>
      <Card>
        <div>
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
              <p className="text-center mb-3">Password Reset</p>

              {error && <Alert variant="danger">{error}</Alert>}
              {message && <Alert variant="success">{message}</Alert>}
              <StyledForm onSubmit={handleSubmit}>
                <StyledForm.Group id="email">
                  
                  <StyledForm.Control
                    type="email"
                    ref={emailRef}
                    required
                    placeholder="Email"
                    className="mb-3"
                  ></StyledForm.Control>
                </StyledForm.Group>

                <StyledButton
                  disabled={loading}
                  className="w-100"
                  type="submit"
                >
                  Reset Password
                </StyledButton>
              </StyledForm>
              <p className="w-100 text-center mt-2">
                Need an account? <StyledLink to="/signup">Sign Up</StyledLink>
              </p>
              <p className="w-100 text-center mt-3">
                Already have an account? <StyledLink to="/login">Log In</StyledLink>
              </p>
            </div>
          </Card.Body>
        </div>
      </Card>
      </div>
    </StyledContainer>
  );
}

export default ForgotPassword;
