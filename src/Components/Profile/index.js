import React, { useEffect, useState } from "react";
import { CircularImage, NameTag, Wrapper } from "./Profile.styles";
import axios from "axios";

export default function Profile(props) {
  

  return (
    <Wrapper>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CircularImage src = {props.profileURL} />
      </div>
      <NameTag></NameTag>
      <NameTag>{props.username}</NameTag>
    </Wrapper>
  );
}
