// const express = require ("express")
// const router = express.Router()

// OR
const router = require("express").Router()

// Slash Routes
router.get("/",(req, res) => {
    res.send("userlist")
})
// Making Routes
router.get("/my-users/userlist",(req, res) => {
    res.send("userlist")
})

router.get("/delete-user", (req, res) => {
    res.send("Userdeleted")
})

module.exports = router