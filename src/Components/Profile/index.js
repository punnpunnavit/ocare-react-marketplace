import React from "react";
import { CircularImage, NameTag,Wrapper } from "./Profile.styles";

export default function Profile() {
  return (
    <Wrapper>
     <div style={{display:"flex",justifyContent:"center"}}>
     <CircularImage src="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"/>
     </div>
     
      <NameTag>Hello</NameTag>
    </Wrapper>
  );
}
