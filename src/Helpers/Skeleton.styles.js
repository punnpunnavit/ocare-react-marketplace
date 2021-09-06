import styled, { css } from "styled-components";

export const Skeleton = styled.div`
  animation: skeleton-loading 1s linear infinite alternate;
  @keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 20%, 70%);
    }
    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }
`;

export const SkeletonLine = styled(Skeleton)`
  width: 100%;
  height: 1em;
  margin-bottom: 0.25rem;
  border-radius: 0.125rem;

  &:only-child&:not(&:last-child) {
    margin-bottom: 0;
    width: 100%;
  }

  /* &:last-child {
    margin-bottom: 0;
    width: 80%;
  } */
`;
