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

// route
app.use("/views", webRouter);

app.listen(port, hostName, () => {
  console.log(`Example app listening to ${hostName}:${port}`);
});
