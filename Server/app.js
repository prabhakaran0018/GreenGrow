const express = require("express");
const app = express();
const bodyparser = require("body-parser")
const mongoose = require('mongoose');
const userRoutes = require("./routers/userRoutes")
const itemRoutes = require("./routers/itemRoutes");
const CartRoutes = require("./routers/CartRoutes")
const FarmerRoutes = require("./routers/FarmerRoutes")
const cors = require("cors");
app.use(bodyparser.json());
app.use(cors());


mongoose.connect(
    'mongodb+srv://prabhakarans2022cse:Prabha45@prabha.9ofmsu3.mongodb.net/greengrow'
).then(() => {
    console.log('Connected to database!');
})


app.set('view engine','ejs'); //EMBEDDED JAVASCRIPT

app.use("/",userRoutes);
app.use("/",itemRoutes);
app.use("/",CartRoutes)
app.use("/",FarmerRoutes)



app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})