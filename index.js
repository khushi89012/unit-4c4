
const express = require('express')
const connect = require("./config/db")
const {register,login} = require("./controllers/auth.controller")
const userController = require("./controllers/user.controller")
const todoController = require("./controllers/todo.controller")
const app = express()
app.use(express.json())
app.use("/user",userController)
app.post("/register",register)
app.post("/login",login)
app.use("/todo",todoController)


app.listen(8000,async()=>{

    try{
        await connect()
        console.log("Listening on port 8000")
    }
    catch(e){
        console.error(e.message)
    }

})