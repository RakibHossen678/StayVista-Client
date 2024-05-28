import { Navigate } from "react-router-dom";
import LoadingSpinner from "../components/Shared/LoadingSpinner";
import useRoles from "../hooks/useRoles";
import PropTypes from "prop-types";
const AdminRoute = ({ children }) => {
  const [role, isLoading] = useRoles();
  if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  if (role === "admin") return children;
  return <Navigate to="/dashboard"></Navigate>;
};
AdminRoute.propTypes = {
  children: PropTypes.element,
};
export default AdminRoute;
