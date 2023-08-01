const express = require("express"); // commonjs
const path = require("path"); // commonjs
require("dotenv").config();

//import express from "express" es modules
const app = express();
const port = process.env.PORT || 8080;
const hostName = process.env.HOST_NAME;

//config template engine
app.set("views", path.join(__dirname, "views"));
// Set EJS View Engine
app.set("view engine", "ejs");

// route
app.get("/views", (req, res) => {
  res.render("simple", {
    name: "Henry",
  });
});

app.listen(port, hostName, () => {
  console.log(`Example app listening to ${hostName}:${port}`);
});
