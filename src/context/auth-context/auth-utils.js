import axios from "axios";

import { constants } from "../video-data-context/utils/constants";

export const abreviations = {
  login: "LOGIN",
  signup: "SIGNUP",
  logout: "LOGOUT",
};

const { logout } = constants;

const setLocalStorage = (obj) => {
  for (let key in obj) {
    localStorage.setItem(key, JSON.stringify(obj[key]));
  }
};

export const handleLogin = async (
  email,
  password,
  authDispatch,
  setIsLogging,
  navigate,
  from,
  setToastMessage
) => {
  setIsLogging(true);
  try {
    const res = await axios({
      url: "/api/auth/login",
      method: "post",
      data: {
        email,
        password,
      },
    });

    if (res.status == 200 || res.status == 201) {
      const { encodedToken, foundUser } = res.data;

      authDispatch({
        type: abreviations.login,
        payload: {
          token: encodedToken,
          userName: foundUser.firstName,
        },
      });

      setLocalStorage({
        token: encodedToken,
        user: foundUser,
        userName: foundUser.firstName,
      });

      navigate(from);
      setToastMessage({ type: "success", message: "Login Successful!" });
    }

    setIsLogging(false);
  } catch (error) {
    if (error.response.status == 401) {
      setToastMessage({ type: "error", message: "Inavid email or password." });
    }
    setIsLogging(false);
    throw new Error("User can not logged in", error);
  }
};

export const handleLogout = (
  authDispatch,
  navigate,
  setToastMessage,
  videoDispatch
) => {
  localStorage.clear();

  authDispatch({ type: abreviations.logout });
  videoDispatch({ type: logout });

  navigate("/");
  setToastMessage({ type: "success", message: "Logout Successful!" });
};

export const handleSignup = async (
  email,
  password,
  firstName,
  lastName,
  setIsLoading,
  authDispatch,
  navigate,
  setToastMessage
) => {
  setIsLoading(true);

  try {
    const res = await axios({
      url: "/api/auth/signup",
      method: "post",
      data: {
        email,
        password,
        firstName,
        lastName,
      },
    });

    if (res.status == 201) {
      handleLogin(email, password, authDispatch, setIsLoading, navigate, "/");

      setIsLoading(false);

      setToastMessage({ type: "success", message: "Signup Successful" });
    }
  } catch (error) {
    if (error.response.status == 422) {
      setToastMessage({
        type: "info",
        message: "You are already registered with us. Please log in.",
      });
    }
    setIsLoading(false);
    throw new Error("Can not sign up");
  }
};
