const express = require("express");
const routerAPI = express.Router();
const { getUsersAPI } = require("../controller/apiController");
routerAPI.get("/", (req, res) => {
  res.send("hello world");
});
routerAPI.get("/abc", (req, res) => {
  res.status(200).json({
    data: "hello world first apis",
  });
});
routerAPI.get("/users", getUsersAPI);
module.exports = routerAPI;
