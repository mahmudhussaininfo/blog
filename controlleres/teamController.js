import { findPublicId } from "../helper/helper.js";
import Team from "../model/Team.js";
import { cloudDelete, cloudUpload } from "../utility/cloudinary.js";

//get All Teams
export const getAllteams = async (req, res) => {
  try {
    const teams = await Team.find();
    if (teams.length > 0) {
      return res.status(200).json({
        message: "All Teams found",
        teams,
      });
    } else {
      return res.status(404).json({ message: "No Teams found" });
    }
  } catch (error) {
    console.log(error.message);
  }
};

// create Team
export const createTeam = async (req, res) => {
  try {
    const { userName, role } = req.body;

    // upload photo to cloud
    let teamPic = null;
    if (req.file) {
      const file = await cloudUpload(req);
      teamPic = file.secure_url;
    }

    const blog = await Team.create({
      userName,
      role,
      photo: teamPic,
    });
    return res.status(200).json({
      message: "Team created successfully",
      blog,
    });
  } catch (error) {
    console.log(error.message);
  }
};

// delete team
export const deleteTeam = async (req, res) => {
  try {
    const { id } = req.params;
    const team = await Team.findByIdAndDelete(id);
    if (team) {
      const publicID = findPublicId(team.photo);
      await cloudDelete(publicID);
      return res.status(200).json({
        message: "Team deleted successfully",
      });
    } else {
      return res.status(404).json({ message: "Team not found" });
    }
  } catch (error) {
    console.log(error.message);
  }
};

// update team

export const updateTeam = async (req, res) => {
  try {
    const { id } = req.params;
    const team = await Team.findByIdAndUpdate(id, req.body);
    if (req.file) {
      const publicID = findPublicId(team.photo);
      await cloudDelete(publicID);
      const file = await cloudUpload(req);
      team.photo = file.secure_url;
      await team.save();
    }
    return res.status(200).json({
      message: "Team updated successfully",
      team,
    });
  } catch (error) {
    console.log(error.message);
  }
};
