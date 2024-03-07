const express = require("express");
const router = express.Router();

// importing of controllers
const authController = require("../contollers/authController");
const { authChecker } = require("../middlewares/authMiddleware");
const userController = require("../contollers/userController");
const taskController = require("../contollers/taskController");

/**
 *
 * UNAUTHENTICATED ROUTES
 *
 */

router.post("/auth/login", authController.login);
router.post("/auth/register", authController.register);

/**
 *
 * AUTHENTICATED ROUTES
 *
 */
router.use(authChecker);

// route to fetch user data
router.get("/getProfile", userController.getUserProfile);

// route to update user data
router.put("/updateProfile", userController.updateUserProfile);

/**
 *
 * TASK ROUTES
 */
router.get("/tasks", taskController.fetchUserTasks);
router.post("/tasks/add", taskController.addNewTask);
router.put("/tasks/edit/:taskId", taskController.editTask);
router.delete("/tasks/delete/:taskId", taskController.deleteTask);

module.exports = router;