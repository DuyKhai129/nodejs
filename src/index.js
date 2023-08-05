const express = require("express"); // commonjs
require("dotenv").config();

const configViewEngine = require("./config/viewEngine");
//import express from "express" es modules
const app = express();
const port = process.env.PORT || 8080;
const hostName = process.env.HOST_NAME;
// router
const webRouter = require("./routes/web");
//config template engine
configViewEngine(app);
//config req.body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data

// route
app.use("/", webRouter);

app.listen(port, hostName, () => {
  console.log(`Example app listening to ${hostName}:${port}`);
});
