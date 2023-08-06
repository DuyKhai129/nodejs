// import connection ctrl  + click
const connection = require("../config/database");

const getCreate = (req, res) => {
  return res.render("createUser.ejs");
};

const createUser = async (req, res) => {
  console.log(">>>data", req.body);

  const { email, name, city } = req.body;

  // connection.query(
  //   `insert into Users (email,name,city) values (?,?,?)`,
  //   [email, name, city],
  //   function (err, results) {
  //     res.send("create user succeed !");
  //   }
  // );

  const [results, fields] = await connection.query(
    `insert into Users (email,name,city) values (?,?,?)`,
    [email, name, city]
  );
  res.send("create user succeed !");
};

const getUpdate = (req, res) => {
  res.render("editUser.ejs");
};

const updateUser = (req, res) => {};
module.exports = {
  createUser,
  getCreate,
  updateUser,
  getUpdate,
};
