const userController = require("../controllers/userController");
const express = require("express");
const Router = express.Router();

Router.post("/signup",userController.newUser);
Router.post("/login",userController.login);
module.exports=Router;
