import React from "react";
import styled, { css } from "styled-components";
import { Container, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Wrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: "100vh";
  
`;

export const StyledForm = styled(Form)`
  .form-control {
    background-color: rgba(168, 168, 168, 0.1);
    border: none;
    outline: none !important;
  }
`;

export const ContentWrapper = styled.div.attrs((props) => ({
  className: "w-100",
}))`
  max-width: "200px";
  min-height: "100vh";
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const StyledButton = styled(Button)`
  align-items: center;
  justify-content: "center";
  width: 100 ;
  height: 100;
  color: var(--white);
  background-color: var(--green);
  border-radius: 20px;
  border-color: var(--green);

  &:hover {
    background-color: var(--green);
    border-color: var(--green);
  }
`;
