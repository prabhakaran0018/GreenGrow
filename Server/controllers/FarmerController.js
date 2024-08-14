const FarmerModel = require("../models/FarmerModel");
const bcrypt = require("bcryptjs")  //FOR HASHING PASSWORD
const jwt = require("jsonwebtoken")

//REGISTER
const newUser = async(req,res)=>{
    try{
    const {Farmer_name,phone_NO,email,password} = req.body;
    const user = await FarmerModel.findOne({ email })
    console.log(phone_NO)
    if(user){
        return res.status(400).json({status:"failure",message:"Farmer_name or email already exists"})
    }
    // if(phone_NO.length != 10){
    //     console.log(phone_NO.length())
    //     return res.status(400).json({status:"failure",message:"Phone.NO must be 10 digits "});
    // }
    if(!user){
        const newUser = new FarmerModel({
            Farmer_name,
            phone_NO,
            email,
            password
        })
        await newUser.save();
        res.status(200).json({status:"success", message:"account created successfully",newUser})
        }
    }
    catch(err){
        res.status(500).json({status:"failure",message:"cannot create new user"})
    }
}

//LOGIN
const login = async(req,res)=>{
    const {email,password} = req.body;
    const user =await FarmerModel.findOne({email})
    try{
        if(!user){
            return res.status(400).json({status:"failure",message:"user not found"})
        }
        const isValidPassword = await bcrypt.compare(password,user.password);
        if(!isValidPassword){
            return res.status(400).json({status:"failure",message:"invalid password"})
        }
        const token = jwt.sign({id:user._id},"secret_key",{
            expiresIn:"8h"
        })
        // res.json({token})
        res.status(200).json({status:"success",message:"loggined successfully",token})
        // console.log(user);
    }
    catch(err){
        res.status(500).json({status:"failed", error:err.message});
    }
}

//GETALLUSER
const getuser = async(req,res)=>{
    try{
    const user = await FarmerModel.find()
    res.status(200).json({status:"success",message:"fetched",user})
    }
    catch(err){
        res.status(401).json({status:"failure",message:"error", message:err.message});
    }
}

//GETUSERBYID
const getuserbyid = async(req,res)=>{
    const id = req.params.id;
    if(!id){
        return res.status(400).json({status:"failure",message:"id is required"})
    }
    try{
        const user = await FarmerModel.findById(id);
        res.status(200).json({status:"success",message:"fetched",user})
    }
    catch(err){
        res.status(401).json({status:"failure",message:"error", message:err.message});
    }
}

module.exports = {newUser,login,getuser,getuserbyid}
