const mongoose = require("mongoose")

const validator = require('validator')
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validator(value){
            if(!validator.isEmail(value)){
                throw  new Error("invalid Email")
            }
        }
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    image:{
        type:String
    },
    github:{
        type:String

    },
    linkedin:{
        type:String

    }
})

//to connect with atlas give same name as in atlas
const users = mongoose.model("users",userSchema)

module.exports = users
 