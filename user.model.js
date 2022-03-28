

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

userSchema.pre("save" , function(next){
    let hash =  bcrypt.hashSync(this.password, 8)
    this.password = hash

    return next()
})
//  we have to decrypt the password

userSchema.methods.checkpassword = function(password){

 return  bcrypt.compareSync(password, this.password)


}




mongoose.exports = mongoose.model("todouser",userSchema)
