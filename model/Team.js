import mongoose from "mongoose";

const teamSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      default: "user",
    },
    photo: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Team = mongoose.model("teams", teamSchema);

export default Team;
