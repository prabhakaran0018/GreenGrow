const express = require("express");
const Router = express.Router();
const CartController = require("../controllers/cartController");
const auth = require("../auth/auth");

Router.post("/addtocart",auth,CartController.addtocart);
Router.get("/getcart",auth,CartController.getCarts);
Router.delete("/deletequantity",auth,CartController.removequantity);


module.exports = Router;