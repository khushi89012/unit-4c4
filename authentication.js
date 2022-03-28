require('dotenv').config()
const jwt = require("jsonwebtoken")



const verifyToken = (token)=>{

return new Promise((reject,resolve)=>{
    jwt.verify(token, process.env.jwt_key, function(err,decoded){
        if(err) return reject(err)

       return resolve(decoded)
    



    });
})
    

}


const authenticate = async(req,res,next)=>{

    if(!req.headers.authorization){
        return res.status(400).send({message: "Authoization token not found"})

    }
    // if it is not start with bearer 

    if(!req.headers.authorization.startsWith("Bearer ")){
        return res.status(400).send({message: "Authoization token not found"})

    }

    const token = req.headers.authorization.split(" ")[1]

    let decoded;
    

try {
    
    decoded = await verifyToken(token)


} catch (e) {
    console.log(e)
        return res.status(400).send({message : "Authorization token not found or incorrect"})
}

// console.log(decoded)
req.userId = decoded.user._id

 return next()

  
}


module.exports =  authenticate