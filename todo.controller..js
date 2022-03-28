

const express = require('express')
const Todo = require("../models/todo.model")
const router = express.Router()

router.post("",async(req,res)=>{
    try{
        const user = await Todo.create(req.body)

        return res.status(200).send({user:user})

    }catch(e){
        return res.status(400).send(e.message)
    }
   
})

router.get("/:id",async(req,res)=>{
    try{
        const user = await Todo.find({user: req.body.id}).lean().exec

        return res.status(200).send({user:user})

    }catch(e){
        return res.status(400).send(e.message)
    }
   
})

router.patch("/:id",authentication,authorisation(["admin","seller"]),async(req,res)=>{
    try {
         const product = await Product.findByIdAndUpdate(req.params.id, req.body,{new:true})

    return res.status(200).send({product:product})
    } catch (e) {

        return res.status(400).send(e.message)
        
    }

   

})





module.exports = router