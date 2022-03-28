

const User = require("../models/user.model")
const jwt = require("jsonwebtoken")
 require('dotenv').config()


const newToken = (user)=>{

    return  jwt.sign({user}, process.env.jwt_key);
}



const register = async(req,res)=>{

try{
    // lets check f email exist or not 
  let user = await User.findOne({email: req.body.email}).lean().exec()

    if(user){
        return res.status(201).send("Email already exist")

    }

    let token = newToken(user)

        user = await User.create(req.body)

        return res.status(201).send({user:user,token:token})
 
}
catch(e){
    return res.status(400).send(e.message)
}
}



const login = async(req,res)=>{

    try{
     let user = await User.findOne({email:req.body.email})

     if(!user){
         return res.status(400).send("Wrong password or email ")
     }
     
     let match = user.checkpassword(req.body.password)
     if(!match){
         return res.status(400).send("Wrong password")

     }
     let token = newToken(user)
     return res.status(201).send({user:user,token:token})

        
        
    }
    catch(e){
        return res.status(400).send(e.message)
    }
    }
    
    module.exports = {register,login}