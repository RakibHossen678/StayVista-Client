import { BsFingerprint } from "react-icons/bs";
import { GrUserAdmin } from "react-icons/gr";
import MenuItem from ".//MenuItem";
import useRoles from "../../../../hooks/useRoles";
import HostRequestModal from "../../../Modal/HostRequestModal";
import useAuth from "../../../../hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useState } from "react";

const GuestMenu = () => {
  const [role] = useRoles();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const modalHandler = async () => {
    try {
      const currentUser = {
        email: user?.email,
        role: "guest",
        status: "Requested",
      };
      const { data } = await axiosSecure.put(`/user`, currentUser);
      console.log(data);
      if (data.modifiedCount > 0) {
        toast.success(`Success! Please wait for admin confirmation`);
      } else {
        toast.error("Pleas!, wait for admin Approval");
      }
    } catch (err) {
      console.log(err);
    } finally {
      closeModal();
    }
  };
  return (
    <>
      <MenuItem
        icon={BsFingerprint}
        label="My Bookings"
        address="my-bookings"
      />

      {role !== "host" && (
        <div
          onClick={() => setIsModalOpen(true)}
          className="flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer"
        >
          <GrUserAdmin className="w-5 h-5" />

          <span className="mx-4 font-medium">Become A Host</span>
        </div>
      )}
      <HostRequestModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        modalHandler={modalHandler}
      ></HostRequestModal>
    </>
  );
};

export default GuestMenu;
