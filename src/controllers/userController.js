// import connection ctrl  + click
const connection = require("../config/database");
const { getUserById, update, delete_user } = require("../services/CRUDService");

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
  res.redirect("/");
};

const getUpdate = async (req, res) => {
  const userId = req.params.id;
  let user = await getUserById(userId); // cần await để chánh bị chạy cái trc cái sau
  res.render("editUser.ejs", { user });
};

const updateUser = async (req, res) => {
  const { userId, email, name, city } = req.body;

  await update(email, name, city, userId);

  res.redirect("/");
};
const Confirm = async (req, res) => {
  const userId = req.params.id;
  let user = await getUserById(userId); // cần await để chánh bị chạy cái trc cái sau
  res.render("deleteUser.ejs", { user });
};
const deleteUser = async (req, res) => {
  const { userId } = req.body;

  await delete_user(userId);

  res.redirect("/");
};
module.exports = {
  createUser,
  getCreate,
  updateUser,
  getUpdate,
  Confirm,
  deleteUser,
};
