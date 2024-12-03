import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  details: {
    type: String,
  },
  photo: {
    type: String,
    default: null,
  },
});

const Blog = mongoose.model("blogs", blogSchema);

export default Blog;
