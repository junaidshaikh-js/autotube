import { useLocation, Navigate } from "react-router-dom";

import { useAuth } from "../../context";

export const RequireAuth = ({ children }) => {
  const {
    state: { token },
  } = useAuth();

  const location = useLocation();
  const from = location;

  return token ? children : <Navigate to="/login" state={from} replace />;
};
