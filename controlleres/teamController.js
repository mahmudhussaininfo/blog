import Team from "../model/Team.js";
import { cloudUpload } from "../utility/cloudinary.js";

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

// delete blog
export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByIdAndDelete(id);
    const publicID = findPublicId(blog.photo);
    await cloudDelete(publicID);
    return res.status(200).json({
      message: "Blog deleted successfully",
    });
  } catch (error) {
    console.log(error.message);
  }
};
