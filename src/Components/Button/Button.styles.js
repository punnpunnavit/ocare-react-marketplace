import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width || "15rem"};
  max-width: ${(props) => props.maxWidth || "15rem"};
  height: ${(props) => props.height || "5rem"};
  color: ${(props) => props.fontColor || "#fff"};
  background-color: ${(props) => props.bgColor || "var(--green)"};
  font-weight: ${(props) => props.fontWeight || "500"};
  border-radius: 30px;

  font-size: ${(props) => props.fontSize|| "1.75rem"};
  border-style: none;
  border-color: var(--green);
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight || "0"};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};


  &:hover {
    background-color: var(--white);
    border-color: var(--green);
    color: var(--green);
    border-width: 1px;
    border-style: solid;
  }
`;
