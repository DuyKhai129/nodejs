const express = require("express");
const router = express.Router();
const { getHome, getDB } = require("../controllers/homeController");
const { createUser, getCreate } = require("../controllers/userController");
router.get("/", getHome);
router.get("/getAll", getDB);
router.get("/createUser", getCreate);
router.post("/create_user", createUser);

module.exports = router; // export default
