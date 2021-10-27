import styled, { css } from "styled-components";
import { FaAngleRight } from "react-icons/fa";
import { Skeleton, SkeletonLine } from "../../Helpers/Skeleton.styles";
import breakpoint from "../../Helpers/Breakpoints";

export const Wrapper = styled.div`
  display: flex;
  margin-left: 50px;
  @media ${breakpoint.device.md} {
    margin-left: 20px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 10px;
`;

export const ProductImage = styled.img`
  min-width: 260px;
  max-width: 260px;
  min-height: 170px;
  max-height: 170px;
  @media ${breakpoint.device.md} {
    min-width: 140px;
    max-width: 140px;
    min-height: 100px;
    max-height: 100px;
  }
`;

export const ProductImageLoading = styled(Skeleton)`
  min-width: 260px;
  max-width: 260px;
  min-height: 170px;
  max-height: 170px;
`;

export const Header = styled.h2`
  font-weight: 400;
  text-decoration: none;
`;

export const HeaderLoading = styled(SkeletonLine)`
  font-weight: 400;
`;

export const TextDes = styled.p`
  font-weight: 100;
  color: black;
  text-decoration: none;
`;

export const TextDesLoading = styled(SkeletonLine)`
  font-weight: 100;
  color: black;
`;

export const Description = styled.div`
  background-color: rgba(168, 168, 168, 0.25);
  width: 400px;
  height: 170px;
  display: flex;
  padding-top: 15px;
`;

export const Button = styled.div`
  width: 50px;
  height: 170px;
  background-color: var(--green);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ArrowIcon = styled(FaAngleRight)`
  font-size: 3.5rem;
  color: var(--white);
`;
