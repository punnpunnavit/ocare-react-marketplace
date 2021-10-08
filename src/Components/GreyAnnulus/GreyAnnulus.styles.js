import styled, { css } from "styled-components";

export const OuterCircle = styled.div`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  width: 600px;
  height: 600px;
  background-image: linear-gradient(to right, rgba(168, 168, 168, 0.3),rgba(168, 168, 168, 0.3));
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
  padding: 90px;
  background-image: linear-gradient(to right, rgba(168, 168, 168, 0.3), rgba(168, 168, 168, 0.3));
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

export const Wrapper = styled.div`
  position: absolute;
  right: -200px;
  bottom: -500px;
  overflow: hidden;
`;
