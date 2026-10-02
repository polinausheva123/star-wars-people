import { Navigate } from "react-router-dom";

export const RootRedirect = () => {
  const isAuthenticated = Boolean(localStorage.getItem("isAuthenticated"));
  return <Navigate to={isAuthenticated ? "/table" : "/login"} replace />;
};
