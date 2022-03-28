
const express = require('express')
const User = require("../models/user.model")
const router = express.Router()
const authentication = require("../middleware/authentication")
router.post("",authentication,async(req,res)=>{
    try{
        const user = await User.create(req.body)

        return res.status(200).send({user:user})

    }catch(e){
        return res.status(400).send(e.message)
    }
   
})




module.exports = router
