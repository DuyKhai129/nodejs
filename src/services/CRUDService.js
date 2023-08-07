const connection = require("../config/database");

const getAllUser = async () => {
  const [results, fields] = await connection.query("select * from Users");
  return results;
};
const getUserById = async (userId) => {
  const [results] = await connection.query("select * from Users where id = ?", [
    userId,
  ]);
  const user = results && results.length > 0 ? results[0] : {};

  return user;
};
const update = async (email, name, city, userId) => {
  const [results, fields] = await connection.query(
    `update  Users set email = ?, name= ?, city= ? where id= ?`,
    [email, name, city, userId]
  );
};
module.exports = {
  getAllUser,
  getUserById,
  update,
};
