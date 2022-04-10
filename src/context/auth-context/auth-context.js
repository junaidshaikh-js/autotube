import { createContext, useContext, useReducer } from "react";

import { authReducer } from "./auth-reducer";
import { handleLogin, handleLogout, handleSignup } from "./auth-utils";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const initialValue = {
    token: JSON.parse(localStorage.getItem("token")),
    userName: JSON.parse(localStorage.getItem("userName")),
  };

  const [state, dispatch] = useReducer(authReducer, initialValue);

  const value = { state, dispatch, handleLogin, handleLogout, handleSignup };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
