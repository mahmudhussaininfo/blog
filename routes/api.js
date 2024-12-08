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
router.post("/login", UserController.login);
router.get("/user-profile", AuthMiddleware, UserController.userProfile);
router.post("/user-update", AuthMiddleware, UserController.updateProfile);
router.get("/user-logout", AuthMiddleware, UserController.logoutProfile);
router.delete("/user-delete/", UserController.deleteProfile);

// blog routes
router.get("/allBlogs", BlogController.getAllBlogs);
router.post("/create-blog", upload, BlogController.createBlog);
router.put("/update-blog/:id", upload, BlogController.updateBlog);
router.delete("/delete-blog/:id", BlogController.deleteBlog);

// Services routes
router.get("/allService", ServiceController.getAllService);
router.post("/create-service", ServiceController.createService);
router.put("/update-service/:id", ServiceController.updateService);
router.delete("/delete-service/:id", ServiceController.deleteService);

// create Teams
router.get("/allTeams", TeamController.getAllteams);
router.post("/create-team", upload, TeamController.createTeam);
router.put("/update-team/:id", upload, TeamController.updateTeam);
router.delete("/delete-team/:id", TeamController.deleteTeam);

// contact form
router.post("/contact", ContactController.contactForm);

// export
export default router;
