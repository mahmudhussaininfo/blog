import { findPublicId } from "../helper/helper.js";
import Blog from "../model/Blog.js";
import { cloudDelete, cloudUpload } from "../utility/cloudinary.js";

//get All Blogs
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    if (blogs.length > 0) {
      return res.status(200).json({
        message: "All Blogs",
        blogs,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

// create blog
export const createBlog = async (req, res) => {
  try {
    const { title, content, details } = req.body;

    // upload photo to cloud
    let brandPic = null;
    if (req.file) {
      const file = await cloudUpload(req);
      brandPic = file.secure_url;
    }

    const blog = await Blog.create({
      title,
      content,
      details,
      photo: brandPic,
    });
    return res.status(200).json({
      message: "Blog created successfully",
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

// update blog

export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByIdAndUpdate(id, req.body);
    if (req.file) {
      const publicID = findPublicId(blog.photo);
      await cloudDelete(publicID);
      const file = await cloudUpload(req);
      blog.photo = file.secure_url;
      await blog.save();
    }
    return res.status(200).json({
      message: "Blog updated successfully",
      blog,
    });
  } catch (error) {
    console.log(error.message);
  }
};
