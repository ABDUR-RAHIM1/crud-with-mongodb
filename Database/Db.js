const mongoose = require("mongoose")

const mongoUrl =  'mongodb+srv://abrar:3NUfKV42ivL3fxNm@cluster0.ekd31bu.mongodb.net/admin1?retryWrites=true&w=majority';

const connectDb = async ()=>{
     try {
       await   mongoose.connect(mongoUrl)
          console.log("Database is connect")
     } catch (error) {
         console.log("ERROR", error)
     }
}

module.exports = connectDb;