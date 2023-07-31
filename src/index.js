const express = require("express"); // commonjs
const path = require("path"); // commonjs

//import express from "express" es modules
const app = express();
const port = 8000;

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
