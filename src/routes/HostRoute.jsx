import { Navigate } from "react-router-dom";
import LoadingSpinner from "../components/Shared/LoadingSpinner";
import useRoles from "../hooks/useRoles";
import PropTypes from "prop-types";

const HostRoute = ({ children }) => {
  const [role, isLoading] = useRoles();
  if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  if (role === "host") return children;
  return <Navigate to="/dashboard"></Navigate>;
};
HostRoute.propTypes = {
  children: PropTypes.element,
};
export default HostRoute;
