import React from "react";
import { StyledButton } from "./Button.styles";

export default function Button(text) {
  return <StyledButton>{text.text}</StyledButton>;
}
