const res = require("express/lib/response")
const { v4: uuidv4 } = require("uuid")
const userModel = require('../model/users.model')

const getAllusers = async (req, res) => {
    const users = await userModel.find()
    res.status(200).json(users)
}
// one users by id
const getOneUsers = async (req, res) => {
    const userId = req.params.id;
    const userData = await userModel.findOne({ id: userId })
    res.status(200).json(userData)
}
// create users
const createUsers = (req, res) => {
    const newUser = new userModel({
        id: uuidv4(),
        name: req.body.name,
        age: Number(req.body.age)
    })

    newUser.save()
    res.status(200).json({ massege: " create usres", newUser })
}
// update users by id
const updateUsers = async (req, res) => {
    try {
         
        const userId = req.params.id;
        console.log(userId)
        const updateData = await userModel.updateOne({ id: userId }, {
            $set: {
                name: req.body.name,
                age: Number(req.body.age)
            }
        })
        res.json(updateData)
        console.log(updateData);

    } catch (error) {
         res.send(error)
    }
}

// delete users by id
const deleteUsers = async (req, res) => {
    try {
        const userId = req.params.id;
        const deleteUser = await userModel.deleteOne({ id: userId })
        res.status(200).json({ massege: "one user deleted" })
    } catch (error) {
        res.json({ massge: error.massege })
    }
}



module.exports = { getAllusers, getOneUsers, createUsers, updateUsers, deleteUsers }