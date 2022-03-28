
const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    title :{type:"String",required:true} ,
    user_id : {type:mongoose.Schema.Types.ObjectId,
    ref :"todouser",
required:true,}  
},{
    timestamps:true,
    versionKey:false

})

mongoose.exports = mongoose.model("todomodel",todoSchema)