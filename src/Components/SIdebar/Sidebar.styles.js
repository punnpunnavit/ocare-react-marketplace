import styled, { css, keyframes } from "styled-components";
import { Col, Row } from "react-bootstrap";
import breakpoint from "../../Helpers/Breakpoints";

export const CircularImage = styled.img`
  border-radius: 50%;
`;

export const SidebarNumber = styled.div`
  font-size: 2.2rem;
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
  width: 100px;
  margin-right: 30px;
  background-color: black;
`;

export const ContentWrapper = styled(Row)`
  width: 100%;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 0 0 0 0
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
  display: flex;
  justify-content: center;
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

  @media  ${breakpoint.device.md} {
    max-width: 50px;
  }
`;

export const NavMenu = styled(Col)`
  max-width: 500px;
  display: none;
  justify-content: center;
  ${({ active }) =>
    active &&
    css`
      height: 100vh;
      display: flex;
      margin: 0;
      padding: 0;
      z-index: 10000000;
      background-color: white;
      position: absolute;
    `}
`;
