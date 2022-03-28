
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


todoSchema.pre("save" , function(next){
    let hash =  bcrypt.hashSync(this.password, 8)
    this.password = hash

    return next()
})
//  we have to decrypt the password

todoSchema.methods.checkpassword = function(password){

 return  bcrypt.compareSync(password, this.password)


}
mongoose.exports = mongoose.model("todomodel",todoSchema)
