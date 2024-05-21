import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";

const DashBoard = () => {
  return (
    <div className="relative min-h-screen md:flex ">
      <Sidebar></Sidebar>
      <div className="flex-1 md:ml-64">
        <div className="p-5">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
