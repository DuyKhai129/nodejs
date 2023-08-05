// import connection ctrl  + click
const connection = require("../config/database");

const createUser = (req, res) => {
  console.log(">>>data", req.body);

  const { email, name, city } = req.body;

  connection.query(
    `insert into Users (email,name,city) values (?,?,?)`,
    [email, name, city],
    function (err, results) {
      res.send("create user succeed !");
    }
  );
};
module.exports = {
  createUser,
};
