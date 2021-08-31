import styled, { css } from "styled-components";
import Annulus from "../../Components/Annulus";

export const Wrapper = styled.div`
  max-height: 100vh;
  overflow: scroll;
  min-width: 93%;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  justify-content: center;
  z-index: 10;
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
`;

export const Horizontal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 10px;
  margin-top: 10px;
  
`;

export const LeftContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
 
  

`

export const StyledAnnulus = styled(Annulus)``;
