

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstname :{type:"String",required:true},    
    lastname :{type:"String",required:false},    
   email :{type:"String",required:true},    
   password:{type:"String",required:true},    
},{
    timestamps:true,
    versionKey:false

})

mongoose.exports = mongoose.model("todouser",userSchema)