const express = require("express")

const { check } = require("express-validator")

const workoutControllers = require("../controllers/workout-controllers")

const router = express.Router()

router.post("/", check('workoutTitle').notEmpty(), workoutControllers.createWorkout)

router.get("/:workoutID/view", workoutControllers.getWorkout)

router.get("/:workoutID/edit", workoutControllers.getWorkout)

router.patch("/:workoutID", check('workoutTitle').notEmpty(), workoutControllers.updateWorkout)

router.delete("/:workoutID", workoutControllers.deleteWorkout)

module.exports = router