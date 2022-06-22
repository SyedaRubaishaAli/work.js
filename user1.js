// const express = require("express")
// const router = express.Router()
// OR 
const router = require("express").Router()
const {useridMiddleware} = require("../middleware/admin")

// router.get("/my-users/:username", userMiddleware, (req, res) => {
//     res.send("list Page")
// })

router.get("/my-users/:id", useridMiddleware, (req, res) => {
    res.send("User ID Valid")
})

// router.get("/my-users/:login", userloginMiddleware, (req, res) => {
//     res.send("User Successfully Login")
// })


module.exports = router