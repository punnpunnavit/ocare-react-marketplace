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
    height: 50px;
    box-shadow: none;
    &::placeholder{
      color:rgba(168, 168, 168, 0.8);
      font-weight: 100;
  }
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12rem;
  height: 3rem;
  color: var(--white);
  background-color: var(--green);
  border-radius: 25px;
  border-color: var(--green);
  font-size: 1.1rem;

  &:active {
    box-shadow: none !important;
    outline: 0px !important;
  }
  .ripple {
    background-color: pink;
    width: 1rem;
    height: 1rem;
    position: absolute;
    border-radius: 50%;
    transform: translateX(-100%) translateY(-100%);
    mix-blend-mode: screen;
    animation: ripple 1250ms ease-out forwards, fade 1500ms ease-out forwards;
  }

  &:hover {
    background-color: var(--white);
    border-color: var(--green);
    color: var(--green);
  }
`;
