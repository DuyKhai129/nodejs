const express = require("express");
const router = express.Router();
const { getHome, getDB } = require("../controllers/homeController");
const {
  createUser,
  getCreate,
  updateUser,
  getUpdate,
  deleteUser,
} = require("../controllers/userController");
router.get("/", getHome);
router.get("/getAll", getDB);
router.get("/createUser", getCreate);
router.post("/create_user", createUser);
router.get("/updateUser/", getUpdate);
router.post("/update_user", updateUser);
router.post("/delete_user/:id", deleteUser);

module.exports = router; // export default
