import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    des: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Service = mongoose.model("services", serviceSchema);

export default Service;
