import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;

  width: 15rem;
  height: 5rem;
  color: var(--white);
  background-color: var(--green);
  border-radius: 30px;

  font-size: 2rem;
  border-style: none;
  border-color: var(--green);

  &:hover {
    background-color: var(--white);
    border-color: var(--green);
    color: var(--green);
    border-width: 1px;
    border-style: solid;
  }
`;
