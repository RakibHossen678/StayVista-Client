import { format } from "date-fns";
import PropTypes from "prop-types";
import { useState } from "react";
import DeleteModal from "../Modal/DeleteModal";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const BookingDataRow = ({ booking, refetch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const axiosSecure = useAxiosSecure();
  const closeModal = () => {
    setIsOpen(false);
  };
  const { mutateAsync } = useMutation({
    mutationFn: async (id) => {
      const { data  } = await axiosSecure.delete(`/booking/${id}`);
      return data;
    },
    onSuccess:async (data) => {
      console.log(data);
      toast.success('Booking Canceled')
      //change room booked status
      await axiosSecure.patch(`/room/status/${booking?.roomId}`, {
        status: false,
      });
    },
  });

  //handle delete
  const handleDelete = async (id) => {
    try {
      await mutateAsync(id);
      refetch();
     
    } catch (err) {
      console.log(err);
    }
    console.log(id);
  };
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="block relative">
              <img
                alt="profile"
                src={booking?.image}
                className="mx-auto object-cover rounded h-10 w-15 "
              />
            </div>
          </div>
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">{booking?.title}</p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="block relative">
              <img
                alt="profile"
                src={booking?.guest?.image}
                className="mx-auto object-cover rounded h-10 w-15 "
              />
            </div>
          </div>
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">
              {booking?.guest?.name}
            </p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">${booking?.price}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {format(new Date(booking?.from), "P")}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {format(new Date(booking?.to), "P")}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
          ></span>
          <button onClick={() => setIsOpen(true)} className="relative">
            Cancel
          </button>
          {/* delete Modal */}
          <DeleteModal
            closeModal={closeModal}
            handleDelete={handleDelete}
            id={booking?._id}
            isOpen={isOpen}
          >
            {" "}
          </DeleteModal>
        </span>
      </td>
    </tr>
  );
};

BookingDataRow.propTypes = {
  booking: PropTypes.object,
  refetch: PropTypes.func,
};

export default BookingDataRow;
