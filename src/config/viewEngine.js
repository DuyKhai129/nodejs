const path = require("path"); // commonjs
const express = require("express");

const configViewEngine = (app) => {
  app.set("views", path.join("./src", "views"));
  // Set EJS View Engine
  app.set("view engine", "ejs");

  //config static files
  app.use(express.static(path.join("./src", "public")));
};

module.exports = configViewEngine;
