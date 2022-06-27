// const express = require("express")
// const router = express.Router()
// OR 
const router = require("express").Router()
const {userMiddleware} = require("../middleware/admin")

// router.get("/my-users/:username", userMiddleware, (req, res) => {
//     res.send("list Page")
// })

router.get("/my-users/:id/:login", userMiddleware, (req, res) => {
    res.send("User ID Valid Login successfully")
})

// router.get("/my-users/:login", userMiddleware, (req, res) => {
//     res.send("User Successfully Login")
// })


module.exports = router