import styled, { css, keyframes } from "styled-components";
import { Col, Form, Row } from "react-bootstrap";
import breakpoint from "../../Helpers/Breakpoints";

export const StyledTextArea = styled(Form)`
  .form-control {
    box-shadow: none;
    background-color: rgba(168, 168, 168, 0.25);
    border: none;
    &::placeholder {
      color: rgba(168, 168, 168, 0.8);
      font-weight: 100;
    }
  }
`;
