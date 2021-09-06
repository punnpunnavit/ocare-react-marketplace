import styled from "styled-components";
import { Form } from "react-bootstrap";

export const SearchBar = styled(Form)`
  .form-control {
    background-color: rgba(168, 168, 168, 0.25);
    border: none;
    width: ${(props) => props.width || "13rem"};
    height: ${(props) => props.height || "2rem"};
    margin-left:${(props) => props.marginLeft || "2rem"} ;
    margin-right:${(props) => props.marginRight || "2rem"} ;
    margin-top: ${(props) => props.marginTop || "2rem"};
    margin-bottom:${(props) => props.marginBottom || "2rem"} ;

    box-shadow: none;
    &::placeholder {
      color: rgba(168, 168, 168, 0.8);
      font-weight: 100;
    }
  }
`;
