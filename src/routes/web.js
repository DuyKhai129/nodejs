const express = require("express");
const router = express.Router();
const { getHome, getDB } = require("../controllers/homeController");
router.get("/", getHome);
router.get("/db", getDB);

module.exports = router; // export default
