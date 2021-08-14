import React, { useState } from "react";

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

//validations
import SignInValidation from "../../Validations/SignInValidation";

const LoginCard = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(SignInValidation(values));
  };

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <CardWrapper>
      <CardHeader>
        <CardHeading>OCARE</CardHeading>
        <CardHeading>MARKETPLACE</CardHeading>
      </CardHeader>

      <CardBody>
        <CardOptionsNote>Sign-in with your Email</CardOptionsNote>

        <CardFieldset>
          <CardInput
            placeholder="Email"
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
          />
        </CardFieldset>

        {errors.email && <p>{errors.email}</p>}

        <CardFieldset>
          <CardInput
            placeholder="Password"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            required
          />
          <CardIcon className="fa fa-eye" eye small />
        </CardFieldset>

        {errors.password && <p>{errors.password}</p>}

        <CardFieldset>
          <CardOptionsNote>Or sign up with</CardOptionsNote>
        </CardFieldset>

        <CardFieldset>
          <CardButton type="button" onClick={handleFormSubmit}>
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
