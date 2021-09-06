import styled from "styled-components";
import { Skeleton, SkeletonLine } from "../../Helpers/Skeleton.styles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CircularImageLoading = styled(Skeleton)`
  display: flex;
  justify-content: center;
  border-radius: 50%;
  width: 175px;
  height: 175px;
`;

export const CircularImage = styled.img`
  display: flex;
  justify-content: center;
  border-radius: 50%;
  width: 175px;
  height: 175px;
`;

export const NameTag = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.75rem;
  font-weight: 100;
`;
export const NametagLoading = styled(SkeletonLine)`
  display: flex;
  justify-content: center;
  font-size: 1.75rem;
  font-weight: 100;
`;
