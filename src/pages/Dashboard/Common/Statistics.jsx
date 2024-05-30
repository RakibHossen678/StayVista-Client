import useRoles from "../../../hooks/useRoles";
import AdminStatistics from "../Admin/AdminStatatistics";

const Statistics = () => {
  const [role, isLoading] = useRoles();
  return <div>{role === "admin" && <AdminStatistics></AdminStatistics>}</div>;
};

export default Statistics;
