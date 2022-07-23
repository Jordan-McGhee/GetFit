const express = require("express")

const { check } = require("express-validator")

const userControllers = require("../controllers/user-controllers")

const router = express.Router()


router.get('/', (req, res, next) => {
    console.log("GET REQUEST IN USER")

    res.json({ message: "We're live bitch"})
})

// router.post("new", userControllers.createNewUser)

module.exports = router