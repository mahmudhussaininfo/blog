import md5 from "md5";
import User from "../model/User.js";
import { tokenEncode } from "../utility/TokenUtils.js";

//register
export const register = async (req, res) => {
  try {
    const reqBody = req.body;

    //hash pass md5
    reqBody.password = md5(reqBody.password);

    //existing user
    const existingUser = await User.findOne({ email: reqBody.email });
    if (existingUser) {
      return res.status(400).json({
        status: "faild",
        message: "User already exists",
      });
    }

    const user = await User.create(reqBody);
    if (user) {
      return res.status(200).json({
        message: "User registration successfully done",
        user,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

//login
export const login = async (req, res) => {
  try {
    let { email, password } = req.body;

    // hash password
    password = md5(password);

    // check student
    const user = await User.aggregate([
      { $match: { email, password } },
      { $project: { _id: 1, email: 1, userName: 1 } },
    ]);

    // if email and password is correct
    if (user.length > 0) {
      // generate token
      let token = await tokenEncode(user[0].email);

      // option
      let options = {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: true,
        sameSite: "none",
      };

      //set cookie
      res.cookie("Token", token, options);

      return res.status(200).json({
        status: "success",
        message: "login successful",
        user,
        token,
      });
    } else {
      return res.status(401).json({
        status: "faild",
        message: "Invalid email or password",
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: "faild",
      message: error.message,
    });
  }
};

// verify user
export const userProfile = async (req, res) => {
  try {
    const email = req.headers.email;

    // match stage
    const matchStage = {
      $match: { email },
    };

    // project stage
    const projectStage = {
      $project: {
        _id: 1,
        userName: 1,
        email: 1,
      },
    };

    const data = await User.aggregate([matchStage, projectStage]);
    return res.status(200).json({
      status: "success",
      message: "user verify successfully",
      user: data[0],
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};

// update user
export const updateProfile = async (req, res) => {
  try {
    const email = req.headers.email;
    const reqBody = req.body;
    const updateStage = {
      $set: reqBody,
    };
    const userUpdate = await User.updateOne({ email }, updateStage, {
      upsert: true,
    });
    return res.status(200).json({
      status: "success",
      message: "User profile read successfully",
      user: userUpdate,
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};

// delete user
export const deleteProfile = async (req, res) => {
  try {
    const { email } = req.body;

    const deleteUser = await User.deleteOne({ email });
    return res.status(200).json({
      status: "success",
      message: "user deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};

// Logout User
export const logoutProfile = async (req, res) => {
  try {
    //clearCookie
    res.clearCookie("Token");
    return res.status(200).json({
      status: "success",
      message: "user Logout successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};
