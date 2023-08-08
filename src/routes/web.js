const express = require("express");
const router = express.Router();
const { getHome, getDB } = require("../controllers/homeController");
const {
  createUser,
  getCreate,
  updateUser,
  getUpdate,
  Confirm,
  deleteUser,
} = require("../controllers/userController");
router.get("/", getHome);
router.get("/getAll", getDB);
router.get("/createUser", getCreate);
router.post("/create_user", createUser);
router.get("/updateUser/", getUpdate);
router.post("/update_user", updateUser);
router.get("/delete_user/:id", Confirm);
router.post("/delete_user", deleteUser);

module.exports = router; // export default
