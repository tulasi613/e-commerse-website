const mongoose = require('mongoose');


const Brand = new mongoose.Schema({
  name:{
    type:String,
    require:true,
  },
   pass:{
    type:String,
    require:true,
   },
   mail:{
    type:String,
    require:true,
   }
      
});

 const Usermodel=mongoose.model("register", Brand)
module.exports = Usermodel
