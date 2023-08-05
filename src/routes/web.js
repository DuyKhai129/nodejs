const express = require("express");
const router = express.Router();
const { getHome, getDB } = require("../controllers/homeController");
const { createUser } = require("../controllers/userController");
router.get("/", getHome);
router.get("/getAll", getDB);
router.post("/create_user", createUser);

module.exports = router; // export default
