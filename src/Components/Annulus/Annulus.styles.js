import styled, { css } from "styled-components";

export const OuterCircle = styled.div`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  background-image: linear-gradient(to right, var(--green), var(--blue));
  background-image: linear-gradient(to right, var(--green), var(--blue));
  background-image: linear-gradient(to right, var(--green), var(--blue));
`;

export const MiddleCircle = styled.div`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-image: linear-gradient(to right, var(--green), var(--blue));
  background-image: linear-gradient(to right, var(--green), var(--blue));
  background-image: linear-gradient(to right, var(--green), var(--blue));
`;

export const InnerCircle = styled.div`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  background-color: white;
`;
