import React from "react";
import {
  OuterCircle,
  InnerCircle,
  MiddleCircle,
  Wrapper,
} from "./GreyAnnulus.styles";

export default function GreyAnnulus() {
  return (
    <div style={{ overflow: "hidden",margin: "0:", height: "100%" }}>
      <Wrapper>
        <OuterCircle>
          <MiddleCircle>
            <InnerCircle />
          </MiddleCircle>
        </OuterCircle>
      </Wrapper>
    </div>
  );
}
