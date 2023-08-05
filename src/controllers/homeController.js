// import connection ctrl  + click
const connection = require("../config/database");

const getHome = (req, res) => {
  return res.render("home", {
    name: "Henry",
  });
};
const getDB = (req, res) => {
  let user = [];
  // simple query
  connection.query("SELECT * from Users", function (err, results, fields) {
    console.log(">>>results: ", results); // results contains rows returned by server
    // console.log(">>>fields: ", fields); // fields contains extra meta data about results, if available
    user = results;
    res.send(JSON.stringify(user));
  });
};
module.exports = {
  getHome,
  getDB,
};
