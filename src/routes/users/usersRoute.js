const express = require("express");
// const {
//   userRegisterCtrl,
//   loginUserCtrl,
//   fetchUsersCtrl,
//   userProfileCtrl,
//   updateUserCtrl,
//   deleteUsersCtrl,
//   fetchUserDetailsCtrl,
// } = require("../../controllers/users/usersCtrl");

const { registerUser, fetchUsersCtrl } = require("../../controllers/users/usersCtrl");
// const authMiddleware = require("../../middlewares/auth/authMiddleware");

const userRoute = express.Router();

userRoute.post("/register", registerUser);
userRoute.get('/',fetchUsersCtrl);
// userRoutes.post("/login", loginUserCtrl);

// userRoutes.get("/", authMiddleware, fetchUsersCtrl);
// userRoutes.get("/profile/", authMiddleware, userProfileCtrl);
// userRoutes.put("/:id", authMiddleware, updateUserCtrl);
// userRoutes.delete("/:id", deleteUsersCtrl);
// userRoutes.get("/:id", fetchUserDetailsCtrl);

module.exports = userRoute;