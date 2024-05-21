import { useState } from "react";
import AddRoomForm from "../../../components/Form/AddRoomForm";
import useAuth from "../../../hooks/useAuth";
import { imageUpload } from "../../../api/utils";

const AddRoom = () => {
  const { user } = useAuth();
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: null,
    key: "selection",
  });
  const handelDates = (item) => {
    console.log(item);
    setDates(item.selection);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const location = form.location.value;
    const category = form.category.value;
    const title = form.title.value;
    const to = "";
    const from = "";
    const price = form.price.value;
    const guests = form.guests.value;
    const bathrooms = form.bathrooms.value;
    const description = form.description.value;
    const bedrooms = form.bedrooms.value;
    const image = from.image.files[0];
    const host = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
    };
    const image_url=await imageUpload(image)
    console.log(image_url)

  };
  return (
    <div>
      <AddRoomForm
        handleSubmit={handleSubmit}
        handelDates={handelDates}
        dates={dates}
      ></AddRoomForm>
    </div>
  );
};

export default AddRoom;
