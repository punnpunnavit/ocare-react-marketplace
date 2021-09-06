import styled, { css } from "styled-components";

export const Wrapper = styled.div`
 margin-left: 150px;
 margin-top: 100px;
  
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
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
  margin-left: auto;
  margin-right: 0;
`;

export const FeedWrapper = styled.div``;
export const Horizontal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const CircularImage = styled.img`
  justify-content: center;
  border-radius: 90%;
  width: 175px;
  height: 175px;
`;
