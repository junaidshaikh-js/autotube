import { useState } from "react";

import {
  PrimaryBtn,
  PrimaryBtnOutline,
  BottomLink,
  FormRow,
  Label,
  ShowPasswordVisibility,
  ErrorMessage,
} from "../../../component";
import { getFormErrors } from "../utils/getFormErrors";
import { handleInputChange } from "../utils/handleInputChange";

export const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [loginErrors, setLoginErrors] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = getFormErrors(formValues);
    setLoginErrors(errors);
  };

  return (
    <div className="wrapper login-main-wrapper flex flex-center">
      <main>
        <div className="login-form-wrapper bg-white">
          <div className="mt-1 p-1">
            <form onSubmit={handleSubmit}>
              <FormRow
                id="email"
                labelText="Email Address"
                inputType="email"
                placeholder="johndoe@example.com"
                value={formValues.email}
                onChange={(e) => handleInputChange(e, setFormValues)}
                inputError={loginErrors.email}
              />

              <FormRow
                id="password"
                labelText="Password"
                inputType="password"
                value={formValues.password}
                onChange={(e) => handleInputChange(e, setFormValues)}
                inputError={loginErrors.password}
                isVisible={isPasswordVisible}
                onShowPassword={() => setIsPasswordVisible((i) => !i)}
              />

              <PrimaryBtn cnames="w-100 my-sm" type="submit">
                Login
              </PrimaryBtn>
            </form>

            <PrimaryBtnOutline cnames="w-100 my-sm">
              Login as Guest
            </PrimaryBtnOutline>

            <BottomLink to="/signup" text="Create New Account" />
          </div>
        </div>
      </main>
    </div>
  );
};
