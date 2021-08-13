import React from "react";

//Styles
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardIcon,
  CardFieldset,
  CardInput,
  CardOptionsNote,
  CardButton,
  CardLink,
} from "./LoginCard.styles";

const LoginCard = () => {
  return (
    <CardWrapper>
      <CardHeader>
        <CardHeading>OCARE</CardHeading>
        <CardHeading>MARKETPLACE</CardHeading>
      </CardHeader>

      <CardBody>
        <CardOptionsNote>Sign-in with your Email</CardOptionsNote>

        <CardFieldset>
          <CardInput placeholder="Email" type="text" required />
        </CardFieldset>

        <CardFieldset>
          <CardInput placeholder="Password" type="password" required />
          <CardIcon className="fa fa-eye" eye small />
        </CardFieldset>

        <CardFieldset>
          <CardOptionsNote>Or sign up with</CardOptionsNote>
        </CardFieldset>

        <CardFieldset>
          <CardButton
            type="button"
            onClick={() => {
              console.log("clicked");
            }}
          >
            SIGN IN
          </CardButton>
        </CardFieldset>

        <CardFieldset>
          <CardLink>I already have an account</CardLink>
        </CardFieldset>
      </CardBody>
    </CardWrapper>
  );
};

export default LoginCard;
