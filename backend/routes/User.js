const express = require("express");
const {
  register,
  login,
  followUser,
  logout,
  updatePassword,
  updateProfile,
  deleteProfile,
  myProfile,
  getUserProfile,
  getAllUsers,
  forgetPassword,
  resetPassword,
} = require("../controllers/User");
const { isAuthenticated } = require("../middlewares/Auth");
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/follow/:id").post(isAuthenticated, followUser);
router.route("/update/password").put(isAuthenticated, updatePassword);
router.route("/update/profile").put(isAuthenticated, updateProfile);
router.route("/delete/me").delete(isAuthenticated, deleteProfile);
router.route("/me").get(isAuthenticated, myProfile);
router.route("/user/:id").get(isAuthenticated, getUserProfile);
router.route("/users").get(isAuthenticated, getAllUsers);
router.route("/forgot/password").post(forgetPassword);
router.route("/password/reset/:token").put(resetPassword);
module.exports = router;
