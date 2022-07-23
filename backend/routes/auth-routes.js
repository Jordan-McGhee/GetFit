const express = require("express")

const { check } = require("express-validator")

const authControllers = require("../controllers/auth-controllers")

const router = express.Router()

router.post("/signup",
    [
        check("firstName").notEmpty(),
        check("lastName").notEmpty(),
        check("email").normalizeEmail().isEmail(),
        check("password").isLength({ min: 6 })
    ], authControllers.signUp)

router.post("/login", authControllers.login)


module.exports = router