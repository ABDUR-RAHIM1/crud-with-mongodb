const app = require("./app"); 
const connectDB = require("./Database/Db")
const PORT = 5000;

connectDB()

app.listen(PORT, () => {
    console.log("server is running on ", PORT)
})
