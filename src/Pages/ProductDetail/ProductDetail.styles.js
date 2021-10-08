import styled, { css } from "styled-components";
import Annulus from "../../Components/Annulus";
import { Col, Row, Card, Form } from "react-bootstrap";

export const Wrapper = styled(Row)`
  flex: 1;
  max-height: 100vh;
  height: 100%;
  max-width: 90vw;
  width: 100%;
  
  position: relative;

  margin: 0 auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TextWrapper = styled.div``;

export const Header = styled.h2`
  font-weight: 400;
`;

export const MainHeader = styled.h1`
  font-size: 4rem;
  color: var(--purple);
`;

export const SubMainHeader = styled.h1`
  font-weight: 100;
  color: black;
`;

export const TextDes = styled.p`
  font-weight: 100;
  color: black;
`;

export const Description = styled.div`
  background-color: rgba(168, 168, 168, 0.25);
  width: 300px;
  height: 250px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
 
`;

export const SubImg = styled.img`
  background-color: rgba(168, 168, 168, 0.25);
  width: 200px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-bottom: 10px;
`;

export const Horizontal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
  position: relative;
`;

export const LeftContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledAnnulus = styled(Annulus)``;
