import React from "react";
import {
  Wrapper,
  ProductImage,
  Description,
  Button,
  Header,
  TextDes,
  TextWrapper,
  ArrowIcon,
} from "./Product.styles";

export default function ProductFeed(props) {
  return (
    <Wrapper>
      <ProductImage src={props.productPicture} />
      <Description>
        <TextWrapper>
          <div>
            <Header>{props.Header}</Header>
            <TextDes>{props.Description}</TextDes>
          </div>
        </TextWrapper>
      </Description>
      <Button>
        <ArrowIcon />
      </Button>
    </Wrapper>
  );
}
