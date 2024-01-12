const connection = require("../config/database");

const getHomepage = (req, res) => {
  return res.render("home.ejs");
};
const getABC = (req, res) => {
  res.send("check ABC");
};

const postCreateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.city;

  console.log("email =", email, "name =", name, "city=", city);

  let [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, city)
        VALUES (?, ?, ?);`,
    [email, name, city]
  );

  console.log("check result: ", results);
  res.send("create user successfully");
  // connection.query(
  //     'SELECT * FROM Users u;',
  //     function (err, results, fields) {

  //     }

  //   const [results, fields] = await connection.query("SELECT * FROM Users u");
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};
module.exports = {
  getHomepage,
  getABC,
  postCreateUser,
  getCreatePage,
};
