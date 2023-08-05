// import connection ctrl  + click
const connection = require("../config/database");

const getHome = (req, res) => {
  return res.render("home.ejs");
};
const getDB = async (req, res) => {
  let user = [];
  const [results, fields] = await connection.query("SELECT * from Users");

  user = results;
  res.send(JSON.stringify(user));
};
module.exports = {
  getHome,
  getDB,
};
