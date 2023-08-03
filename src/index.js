const express = require("express"); // commonjs
require("dotenv").config();

const configViewEngine = require("./config/viewEngine");
//import express from "express" es modules
const app = express();
const port = process.env.PORT || 8080;
const hostName = process.env.HOST_NAME;
// router
const webRouter = require("./routes/web");
// import connection ctrl  + click
const connection = require("./config/database");
//config template engine
configViewEngine(app);

// get connection

// simple query
connection.query("SELECT * from Users u", function (err, results, fields) {
  console.log(">>>results: ", results); // results contains rows returned by server
  // console.log(">>>fields: ", fields); // fields contains extra meta data about results, if available
});

// route
app.use("/views", webRouter);

app.listen(port, hostName, () => {
  console.log(`Example app listening to ${hostName}:${port}`);
});
