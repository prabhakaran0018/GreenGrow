const FarmerController = require("../controllers/FarmerController");
const express = require("express");
const Router = express.Router();

Router.post("/farmer/signup",FarmerController.newUser);
Router.post("/farmer/login",FarmerController.login);
module.exports=Router;
