const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const FarmerSchema = new mongoose.Schema(
    {
        Farmer_name : {
            type: String,
            required:true
        },
        phone_NO:{
            type:Number,
          
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        }
    }
)

//HASHING PASSWORD
FarmerSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        return next();
    }
    else{
        const salt = await bcrypt.genSalt(10);     //SALT IS USED TO HASH THE PASS AND ALSO USED TO PROTECT THE PASSWORD FROM ATTACKERS
        this.password = await bcrypt.hash(this.password,salt);
        next();
    }
})

const FarmerModel = mongoose.model("Farmer", FarmerSchema);
module.exports = FarmerModel;
