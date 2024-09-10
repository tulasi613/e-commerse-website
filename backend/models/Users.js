const mongoose = require('mongoose');


const itemSchema = new mongoose.Schema({
  name:String,
  r:Number
   
      
});

 const Usermodel=mongoose.model("users", itemSchema)
module.exports = Usermodel
