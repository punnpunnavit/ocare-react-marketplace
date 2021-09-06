import React, { useEffect, useState } from "react";
import {
  CircularImage,
  NameTag,
  Wrapper,
  CircularImageLoading,
  NametagLoading,
} from "./Profile.styles";
import axios from "axios";

export function Profile({ username, profileURL, loading }) {
  console.log("loading", loading);
  return (
    <Wrapper>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CircularImage src={profileURL} />
      </div>
      {loading ? <NametagLoading /> : <NameTag>{username}</NameTag>}
    </Wrapper>
  );
}

// export function SkeletonLoadingProfile() {
//   return (
//     <Wrapper>
//       <div style={{ display: "flex", justifyContent: "center" }}>
//         <CircularImageLoading />
//       </div>
//       <NametagLoading />
//     </Wrapper>
//   );
// }
