import React, { useRef, useState } from "react";
import { Card, Alert } from "react-bootstrap";
import { useAuth } from "../../Context/AuthContext";
import { StyledContainer,StyledButton,StyledForm,StyledLink } from "./ForgotPasswordCard.styles";


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
          <p className="text-center mb-3">Reset Your Password Here</p>
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
                width: "40%",
                margin: "0 auto",
              }}
            >
              RESET PASSWORD
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

export default ForgotPassword;
