import express from "express";
import * as UserController from "../controlleres/UsersController.js";
import * as BlogController from "../controlleres/blogController.js";
import AuthMiddleware from "../middlewares/AuthMiddleware.js";
import { blogImg } from "../utility/multer.js";

const router = express.Router();

// users routes
router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/user-profile", AuthMiddleware, UserController.userProfile);
router.post("/user-update", AuthMiddleware, UserController.updateProfile);
router.get("/user-logout", AuthMiddleware, UserController.logoutProfile);
router.delete("/user-delete/", UserController.deleteProfile);

// blog routes
router.post("/create-blog", AuthMiddleware, blogImg, BlogController.createBlog);
router.delete("/delete-blog/:id", AuthMiddleware, BlogController.deleteBlog);

// export
export default router;
