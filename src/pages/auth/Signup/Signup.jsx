import { useState } from "react";

import {
  PrimaryBtn,
  ShowPasswordVisibility,
  FormRow,
  Label,
  BottomLink,
} from "../../../component";

export const Signup = () => {
  const [visibility, setVisibility] = useState({
    password: false,
    confirmPassword: false,
  });

  const handlevisibility = (value) => {
    if (value == "password") {
      setVisibility((v) => ({ ...v, password: !v.password }));
    } else {
      setVisibility((v) => ({ ...v, confirmPassword: !v.confirmPassword }));
    }
  };

  return (
    <div className="signup-main-wrapper flex flex-center mt-1">
      <main>
        <div className="signup-form-wrapper  bg-white p-1">
          <form>
            <FormRow
              id="firstName"
              labelText=" First Name"
              inputType="text"
              placeholder="John"
            />

            <FormRow
              id="lastName"
              labelText="Last Name"
              inputType="text"
              placeholder="Doe"
            />

            <FormRow
              id="email"
              labelText="Email Address"
              inputType="email"
              placeholder="johndoe@example.com"
            />

            <div>
              <Label to="password" text="Password" />

              <div className="input-icon">
                <input
                  type={visibility.password ? "text" : "password"}
                  className="form-field my-sm p-sm w-100"
                  placeholder="*********"
                  id="password"
                  required
                />

                <ShowPasswordVisibility
                  isVisible={visibility.password}
                  onClick={() => handlevisibility("password")}
                />
              </div>
            </div>

            <div>
              <Label to="confirmPassword" text="Confirm Password" />

              <div className="input-icon">
                <input
                  type={visibility.confirmPassword ? "text" : "password"}
                  className="form-field my-sm p-sm w-100"
                  placeholder="*********"
                  id="confirmPassword"
                />

                <ShowPasswordVisibility
                  isVisible={visibility.confirmPassword}
                  onClick={() => handlevisibility("confirmPassword")}
                />
              </div>
            </div>

            <PrimaryBtn cnames="w-100 mt-sm" type="submit">
              Create New Account
            </PrimaryBtn>
          </form>

          <BottomLink to="/login" text="Already have an account" />
        </div>
      </main>
    </div>
  );
};
