import styled, { css, keyframes } from "styled-components";

const displaceContent = keyframes`
 from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(250px);
  }
`;

export const Navbar2 = styled.div`
  background-color: #060b26;
  width: 100px;
  height: 100vh;
  display: flex;
  justify-content: start;
  align-items: center;
  
  &.active {
    background-color: #060b26;
    width: 100px;
    height: 100vh;
    display: flex;
    justify-content: start;
    align-items: center;

    animation-name: ${displaceContent};
    animation-duration: 10ms;

    animation-fill-mode: forwards;
  }
`;

export const NavMenu = styled.div`
  background-color: white;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: -100%;
  transition: 850ms;
  &.active {
    left: 0;
    transition: 10ms;
  }
`;
