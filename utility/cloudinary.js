import cloudinary from "cloudinary";
import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_CLOUD_NAME,
} from "../config/config.js";

cloudinary.v2.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

//cloud uploads
export const cloudUpload = async (req) => {
  const upload = await cloudinary.v2.uploader.upload(req.file.path);
  return upload;
};

// delete cloud upload
export const cloudDelete = async (publicID) => {
  await cloudinary.v2.uploader.destroy(publicID);
};
