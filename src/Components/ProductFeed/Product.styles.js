import styled, { css } from "styled-components";
import { FaAngleRight } from "react-icons/fa";

export const Wrapper = styled.div`
  display: flex;
  margin-left: 50px;
`;

export const TextWrapper = styled.div``;

export const ProductImage = styled.img`
  width: 260px;
  height: 170px;
`;

export const Header = styled.h2`
  font-weight: 400;
`;

export const TextDes = styled.p`
  font-weight: 100;
  color: black;
`;

export const Description = styled.div`
  background-color: rgba(168, 168, 168, 0.25);
  width: 500px;
  height: 170px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
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
