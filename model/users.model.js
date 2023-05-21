const mongoose = require("mongoose")

const usersSchema =  mongoose.Schema({
    id : {
        type :String,
        required : true,
    } ,
    name : {
         type : String,
         required : true,
     },
     age : {
         type: Number,
         required : true,
     },
     createOn:{
          type : Date,
          default :Date.now
     }
})

const User = mongoose.model("user", usersSchema)

module.exports = User