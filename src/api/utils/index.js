import axios from "axios";

//image upload
export const imageUpload = async (image) => {
  const fromData = new FormData();
  fromData.append("image", image);
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
    fromData
  );
  return data.data.display_url;
};
