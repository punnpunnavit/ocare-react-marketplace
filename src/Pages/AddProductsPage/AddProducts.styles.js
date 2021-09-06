import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  max-height: 100vh;
  overflow: scroll;
  min-width: 93%;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;

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

export const UploadImageWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 220px;
  max-height: 200px;
  height: 170px;
  outline: 4px dashed rgba(168, 168, 168, 0.45);
  outline-offset: -20px;
  background-color: rgba(168, 168, 168, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FeedWrapper = styled.div``;
export const Horizontal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 10px;
  margin-top: 10px;
`;
