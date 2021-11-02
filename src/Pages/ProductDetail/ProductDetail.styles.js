import styled, { css } from "styled-components";
import Annulus from "../../Components/Annulus";
import { Col, Row, Card, Form } from "react-bootstrap";
import breakpoint from "../../Helpers/Breakpoints";

export const Wrapper = styled(Row)`
  flex: 1;
  max-height: 100vh;
  height: 100%;
  max-width: 100vw;
  width: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  margin: 0 0 0 0;
  overflow-y: scroll;
  overflow-x: hidden;

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
  z-index: 20;
`;

export const SubMainHeader = styled.h1`
  font-weight: 100;
  color: black;
  z-index: 20;
`;

export const TextDes = styled.p`
  font-weight: 100;
  color: black;
`;

export const Description = styled(Col)`
  background-color: rgba(168, 168, 168, 0.25);
  max-width: 370px;
  min-width: 200px;
  width: 100%;
  height: 250px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  
  @media ${breakpoint.device.md} {
    
    justify-content: center;
    width: 100%;
    margin-bottom: 10px;
  }
`;

export const DesWrapper = styled(Col)`

@media ${breakpoint.device.md} {
    
  order: 2
  }
`


export const ImageWrapper = styled(Col)`

display: flex;
justify-content: center;

@media ${breakpoint.device.md} {
    
   margin-left: 10px;
    }


`

export const SubImg = styled.img`
  background-color: rgba(168, 168, 168, 0.25);
  width: 200px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-bottom: 10px;
  @media ${breakpoint.device.md} {
    width: 130px;
    height: 130px;
  }
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
