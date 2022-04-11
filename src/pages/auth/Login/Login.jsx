import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  PrimaryBtn,
  PrimaryBtnOutline,
  BottomLink,
  FormRow,
  Loader,
} from "../../../component";

import { getFormErrors } from "../utils/getFormErrors";
import { handleInputChange } from "../utils/handleInputChange";
import { useAuth, useToast } from "../../../context";

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
  const [isLogging, setIsLogging] = useState(false);

  const { handleLogin, dispatch: authDispatch } = useAuth();
  const { setToastMessage } = useToast();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.pathname || "/";

  const testLogin = {
    email: "sj.shaikhjunaid@gmail.com",
    password: "junaidshaikh",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = getFormErrors(formValues);
    setLoginErrors(errors);

    if (!Object.keys(errors).length) {
      const { email, password } = formValues;

      handleLogin(
        email,
        password,
        authDispatch,
        setIsLogging,
        navigate,
        from,
        setToastMessage
      );
    }
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

              <PrimaryBtn
                cnames="w-100 my-sm"
                type="submit"
                disable={isLogging}
              >
                Login
              </PrimaryBtn>
            </form>

            <PrimaryBtnOutline
              cnames="w-100 my-sm"
              onClick={() => {
                handleLogin(
                  testLogin.email,
                  testLogin.password,
                  authDispatch,
                  setIsLogging,
                  navigate,
                  from,
                  setToastMessage
                );
              }}
              disable={isLogging}
            >
              Login as Guest
            </PrimaryBtnOutline>

            <BottomLink to="/signup" text="Create New Account" />
          </div>
        </div>
      </main>

      {isLogging && <Loader />}
    </div>
  );
};
