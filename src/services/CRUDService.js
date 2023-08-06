const connection = require("../config/database");

const getAllUser = async (req, res) => {
  const [results, fields] = await connection.query("select * from Users");
  return results;
};
module.exports = {
  getAllUser,
};
