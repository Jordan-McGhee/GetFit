const express = require("express")

const { check } = require("express-validator")

const homepageControllers = require("../controllers/homepage-controllers")

const router = express.Router()

router.get("/", homepageControllers.getHomePage)


module.exports = router