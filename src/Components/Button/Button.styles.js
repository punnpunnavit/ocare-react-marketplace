import styled from "styled-components";
import {Button} from 'react-bootstrap'

export const StyledButton = styled.div`
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