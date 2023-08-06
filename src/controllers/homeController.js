// import connection ctrl  + click
const connection = require("../config/database");
const { getAllUser } = require("../services/CRUDService");

const getHome = async (req, res) => {
  let results = await getAllUser();
  return res.render("home.ejs", { listUser: results });
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
