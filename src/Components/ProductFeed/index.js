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
  HeaderLoading,
  TextDesLoading,
  ProductImageLoading,
} from "./Product.styles";

export function ProductFeed(props) {
  return (
    <Wrapper>
      <ProductImage src={props.productPicture} />
      <Description>
        <TextWrapper>
          <Header>{props.Header}</Header>
          <TextDes>{props.Description}</TextDes>
        </TextWrapper>
      </Description>
      <Button>
        <ArrowIcon />
      </Button>
    </Wrapper>
  );
}

export function ProductFeedLoading() {
  return (
    <Wrapper>
      <ProductImageLoading />
      <Description>
        <TextWrapper>
          <HeaderLoading/>
          <TextDesLoading/>
          </TextWrapper>
      </Description>
      <Button>
        <ArrowIcon />
      </Button>
    </Wrapper>
  );
}
