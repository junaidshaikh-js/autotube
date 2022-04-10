import { useState } from "react";

import { PrimaryBtn, FormRow, BottomLink, Loader } from "../../../component";
import { handleInputChange } from "../utils/handleInputChange";
import { getFormErrors } from "../utils/getFormErrors";
import { useAuth } from "../../../context";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [visibility, setVisibility] = useState({
    password: false,
    confirmPassword: false,
  });
  const [formValues, setFormValues] = useState(initialValues);
  const [signupErrors, setSignupErrors] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(false);

  const { handleSignup, dispatch: authDispatch } = useAuth();
  const navigate = useNavigate();

  const handlevisibility = (value) => {
    value == "password"
      ? setVisibility((v) => ({ ...v, password: !v.password }))
      : setVisibility((v) => ({ ...v, confirmPassword: !v.confirmPassword }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = getFormErrors(formValues);
    setSignupErrors(errors);

    if (!Object.keys(errors).length) {
      const { email, password, firstName, lastName } = formValues;

      handleSignup(
        email,
        password,
        firstName,
        lastName,
        setIsLoading,
        authDispatch,
        navigate
      );
    }
  };

  return (
    <div className="wrapper signup-main-wrapper flex flex-center mt-1">
      <main>
        <div className="signup-form-wrapper  bg-white p-1">
          <form onSubmit={handleSubmit}>
            <FormRow
              id="firstName"
              labelText=" First Name"
              inputType="text"
              placeholder="John"
              value={formValues.firstName}
              onChange={(e) => handleInputChange(e, setFormValues)}
              inputError={signupErrors.firstName}
            />

            <FormRow
              id="lastName"
              labelText="Last Name"
              inputType="text"
              placeholder="Doe"
              value={formValues.lastName}
              onChange={(e) => handleInputChange(e, setFormValues)}
              inputError={signupErrors.lastName}
            />

            <FormRow
              id="email"
              labelText="Email Address"
              inputType="email"
              placeholder="johndoe@example.com"
              value={formValues.email}
              onChange={(e) => handleInputChange(e, setFormValues)}
              inputError={signupErrors.email}
            />

            <FormRow
              id="password"
              labelText="Password"
              inputType="password"
              value={formValues.password}
              onChange={(e) => handleInputChange(e, setFormValues)}
              inputError={signupErrors.password}
              isVisible={visibility.password}
              onShowPassword={() => handlevisibility("password")}
            />

            <FormRow
              id="confirmPassword"
              labelText="Confirm Password"
              inputType="password"
              value={formValues.confirmPassword}
              onChange={(e) => handleInputChange(e, setFormValues)}
              inputError={signupErrors.confirmPassword}
              isVisible={visibility.confirmPassword}
              onShowPassword={() => handlevisibility("confirmPassword")}
            />

            <PrimaryBtn cnames="w-100 mt-sm" type="submit" disable={isLoading}>
              Create New Account
            </PrimaryBtn>
          </form>

          <BottomLink to="/login" text="Already have an account" />
        </div>
      </main>

      {isLoading && <Loader />}
    </div>
  );
};
