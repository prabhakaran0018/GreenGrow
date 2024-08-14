const express = require("express");
const Router = express.Router(); 
const auth = require("../auth/auth")

const itemController = require("../controllers/itemController");
Router.get("/getitem",itemController.getitems)
Router.post("/additem",itemController.additems);
Router.patch("/updateproduct/:id",itemController.updateitems)
Router.delete("/deleteProduct/:id",itemController.deleteitems)
module.exports=Router;
