const express = require("express")

const { check } = require("express-validator")

const workoutControllers = require("../controllers/workout-controllers")

const router = express.Router()

// router.get("/:workoutID", workoutControllers.getWorkout)

// router.post("/", workoutControllers.createWorkout)

// router.get("/:workoutID/edit", workoutControllers.editWorkout)

// router.patch("/:workoutID", workoutControllers.updateWorkout)

// router.delete("/:workoutID", workoutControllers.deleteWorkout)

module.exports = router