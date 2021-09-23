import styled, { css, keyframes } from "styled-components";
import {Col,Row} from 'react-bootstrap'

export const CircularImage = styled.img`
  justify-content: center;
  border-radius: 50%;
  width: 175px;
  height: 175px;
`;

export const SidebarNumber = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: var(--green);
  text-align: center;
`;

export const SidebarIcon = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
`;

export const SidebarDes = styled.div`
  font-weight: 100;
  font-size: 1.5rem;
  text-align: center;
`;

export const TagsContainer = styled.div`
  justify-content: center;
  width: 100px;
  margin-right: 30px;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 80px;
`;

const displaceContent = keyframes`
  0%{
    transform: translateX(0px);
  }
  100%{
    transform: translateX(500px);
  }
`;

export const NavbarShown = styled(Col)`
  background-image: linear-gradient(var(--green), var(--blue));
  opacity: 0.98;
  max-width: 100px;
  min-height: 100vh;
  height: 100%;
  ${({ active }) =>
    active &&
    css`
      width: 100px;
      height: 100vh;
      z-index: 100;
      animation-name: ${displaceContent};
      animation-duration: 1ms;

      animation-fill-mode: forwards;
    `}
`;

export const NavMenu = styled(Col)`
margin: 0;
max-width: 500px;
 display: none;
  ${({ active }) =>
    active &&
    css`
    
      display: flex;
      z-index: 10;
    `}
`;
