const { getAllusers, getOneUsers, createUsers, updateUsers, deleteUsers } = require("../controllers/users.controllers");

const router = require("express").Router();

router.get("/", getAllusers)
router.get("/:id", getOneUsers)
router.post("/", createUsers)
router.put("/:id", updateUsers)
router.delete("/:id", deleteUsers)



module.exports  = router;