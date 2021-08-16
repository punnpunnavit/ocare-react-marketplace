import React from "react";
import styled, { css } from "styled-components";
import { Container, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export const StyledContainer = styled(Container)`
  min-height: 100vh;

  background: linear-gradient(
      90deg,
      rgb(63, 189, 167, 0.85) 50%,
      rgb(60, 122, 190, 0.85) 50%
    ),
    url("https://i.ibb.co/wW9KxNx/UI.jpg") no-repeat top center;

  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-color: pink;
  min-width: 100vw;
`;
