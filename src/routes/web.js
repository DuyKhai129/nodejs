const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("simple", {
    name: "Henry",
  });
});

module.exports = router; // export default
