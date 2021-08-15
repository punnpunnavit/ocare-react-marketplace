import styled, { css } from "styled-components";
import { Container } from "react-bootstrap";

export const Wrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: "100vh";
`;

export const ContentWrapper = styled.div.attrs(() => ({
  className: "w-100",
}))`
  max-width: "200px";
`;
