const fs = require("fs");
const md5 = require("md5");

const getUsers = (req, res) => {};

const registerUser = (req, res) => {};

const loginUser = async (req, res) => {
  let userCredentials = "";

  userCredentials = req.body;

  let jsonUsersData = "./data/users.json";
  let users = [];
  let response = {
    status: 401,
    msg: "User Name or Password is IncorrectQ! Please Try Again",
    data: {},
  };
  fs.readFile(jsonUsersData, (err, data) => {
    if (!data) data = [];
    try {
      users = JSON.parse(data);
    } catch (err) {}

    if (!users) users = [];
    if (
      users.filter(
        (e) =>
          e.admin_user == userCredentials.user &&
          e.admin_pass == md5(userCredentials.pass)
      ).length > 0
    ) {
      response.status = 200;
      response.msg = "User Loged In Successfully!";
    } else {
      response.status = 401;
      response.msg = "User Loged In Successfully!";
    }

    users.map((user) => {
      if (
        user.admin_user == userCredentials.user &&
        user.admin_pass == md5(userCredentials.pass)
      ) {
        try {
          response.data = user;
        } catch (err) {}
      }
    });

    res.json(response);
  });
};

const updateUser = (req, res) => {};

const deleteUser = (req, res) => {};

module.exports = {
  getUsers,
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
};
