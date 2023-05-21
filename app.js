const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const router = require("./routes/users.routes")
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api/users', router)

app.get("/", (req, res)=>{
       res.sendFile(__dirname + "/views/index.html")
})


module.exports  = app;