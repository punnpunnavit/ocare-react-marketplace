import styled from "styled-components";
import { Form } from "react-bootstrap";
import breakpoint from "../../Helpers/Breakpoints";

export const SearchBar = styled(Form)`
  .form-control {
    background-color: rgba(168, 168, 168, 0.25);
    border: none;
    width: ${(props) => props.width || "13rem"};
    height: ${(props) => props.height || "2rem"};
    margin-left: ${(props) => props.marginLeft || "0rem"};
    margin-right: ${(props) => props.marginRight || "0rem"};
    margin-top: ${(props) => props.marginTop || "0rem"};
    margin-bottom: ${(props) => props.marginBottom || "0rem"};

    @media ${breakpoint.device.md} {
      display: block;
    }

    box-shadow: none;
    &::placeholder {
      color: rgba(168, 168, 168, 0.8);
      font-weight: 100;
    }
  }
`;
