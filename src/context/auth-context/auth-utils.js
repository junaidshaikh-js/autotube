import axios from "axios";

export const abreviations = {
  login: "LOGIN",
  signup: "SIGNUP",
  logout: "LOGOUT",
};

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
  from
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
    }

    setIsLogging(false);
  } catch (error) {
    setIsLogging(false);
    throw new Error("User can not logged in", error);
  }
};

export const handleLogout = (authDispatch, navigate) => {
  localStorage.clear();

  authDispatch({ type: abreviations.logout });

  navigate("/");
};

export const handleSignup = async (
  email,
  password,
  firstName,
  lastName,
  setIsLoading,
  authDispatch,
  navigate
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
    }
  } catch (error) {
    setIsLoading(false);
    throw new Error("Can not sign up");
  }
};
