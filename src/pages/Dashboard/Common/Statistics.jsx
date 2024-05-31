import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import useRoles from "../../../hooks/useRoles";
import AdminStatistics from "../Admin/AdminStatatistics";
import GuestStatistics from "../Guest/GuestStatistics";
import HostStatistics from "../Host/HostStatistics";

const Statistics = () => {
  const [role, isLoading] = useRoles();
  if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  return (
    <>
      {role === "admin" && <AdminStatistics></AdminStatistics>}
      {role === "host" && <HostStatistics></HostStatistics>}
      {role === "guest" && <GuestStatistics></GuestStatistics>}
    </>
  );
};

export default Statistics;
