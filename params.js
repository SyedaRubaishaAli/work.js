 const express = require ("express")
 const router = express.Router()

// OR
// const router = require("express").Router()


// Making Routes
routes.get("/my-params", (req,res) => {
    res.send(req.params)
})

// router.get("/my-params/:username",(req, res) => {
//     res.send(req.params.username)
// })

// OR

router.get("/my-params/:username/:ID", (req, res) => {
    res.send(`${req.params.username} ${req.params.ID}`)
})

router.post("/register", (req, res) => {
    res.send(req.body)
})

 router.post("/login", (req, res) => {
     res.send(req.body)
 })

module.exports = router