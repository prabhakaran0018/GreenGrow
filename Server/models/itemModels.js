const mongoose = require("mongoose");


const itemSchema = new mongoose.Schema({
    id:{
        type:String,
        unique:true

    },
    name:{
        type:String,
        required:[true,"Title is required"]
    },
    expriedyear:{
        typr:String
    },
    description:{
        type:String,
        required:true
    },
    rate:{
        type:String
    },
    category:{
        type:String
    },
   
    
    image:{
        type:String
    }


})
const itemModel=mongoose.model("item",itemSchema);
module.exports=itemModel;