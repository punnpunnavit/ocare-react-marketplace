import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  max-height: 100vh;
  overflow: scroll;
  min-width: 93%;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: 10px;
  margin-right: 10px;
 
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-top: 100px;
  margin-bottom: 50px;
`;

export const Header = styled.h1`
  font-size: 4rem;
  color: var(--purple);
`;

export const SearchbarWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0;
`;


export const Horizontal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 10px;
  margin-top: 10px;
`;
