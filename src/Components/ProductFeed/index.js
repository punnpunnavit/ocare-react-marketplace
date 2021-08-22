import React from "react";
import {
  Wrapper,
  ProductImage,
  Description,
  Button,
  Header,
  TextDes,
  TextWrapper,
  ArrowIcon
} from "./Product.styles";

export default function ProductFeed() {
  return (
    <Wrapper>
      <ProductImage src="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
      <Description>
        <TextWrapper>
          <div>
            <Header>Hey</Header>
            <TextDes>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              tempora aut eum labore saepe? Qui iure ducimus adipisci neque
              veniam!
            </TextDes>
          </div>
        </TextWrapper>
      </Description>
      <Button>
          <ArrowIcon/>
      </Button>
    </Wrapper>
  );
}
