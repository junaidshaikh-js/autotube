import { useState } from "react";

import {
  PrimaryBtn,
  PrimaryBtnOutline,
  BottomLink,
  FormRow,
  Label,
  ShowPasswordVisibility,
} from "../../../component";

export const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div className="login-main-wrapper flex flex-center">
      <main>
        <div className="login-form-wrapper bg-white">
          <div className="mt-1 p-1">
            <form>
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
                    type={isPasswordVisible ? "text" : "password"}
                    className="form-field my-sm p-sm w-100"
                    placeholder="*********"
                    id="password"
                    required
                  />

                  <ShowPasswordVisibility
                    isVisible={isPasswordVisible}
                    onClick={() => setIsPasswordVisible((i) => !i)}
                  />
                </div>
              </div>

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
