import React from "react";
import { StyledButton } from "./Button.styles";

export default function Button(props) {
  return (
    <StyledButton
      width={props.width}
      height={props.height}
      fontColor={props.fontColor}
      bgColor={props.bgColor}
      fontSize={props.fontSize}
      fontWeight={props.fontWeight}
      marginTop={props.marginTop}
      marginBottom={props.marginBottom}
      marginLeft ={props.marginLeft}
      marginRight={props.marginRight}
      onClick={props.onClick}
    >
      {props.text}
    </StyledButton>
  );
}
