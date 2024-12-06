import express from "express";
import * as UserController from "../controlleres/UsersController.js";
import * as BlogController from "../controlleres/blogController.js";
import * as ServiceController from "../controlleres/serviceController.js";
import * as TeamController from "../controlleres/teamController.js";
import * as ContactController from "../controlleres/contactController.js";
import AuthMiddleware from "../middlewares/AuthMiddleware.js";
import { upload } from "../utility/multer.js";

const router = express.Router();

// users routes
router.get("/allUser", UserController.getAllUser);
router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/user-profile", AuthMiddleware, UserController.userProfile);
router.post("/user-update", AuthMiddleware, UserController.updateProfile);
router.get("/user-logout", AuthMiddleware, UserController.logoutProfile);
router.delete("/user-delete/", UserController.deleteProfile);

// blog routes
router.get("/allBlogs", BlogController.getAllBlogs);
router.post("/create-blog", AuthMiddleware, upload, BlogController.createBlog);
router.delete("/delete-blog/:id", AuthMiddleware, BlogController.deleteBlog);

// Services routes
router.get("/allService", ServiceController.getAllService);
router.post("/create-service", ServiceController.createService);

// create Teams
router.get("/allTeams", TeamController.getAllteams);
router.post("/create-team", upload, TeamController.createTeam);

// contact form
router.post("/contact", ContactController.contactForm);

// export
export default router;
