const HttpError = require("../models/http-error")
const mongoose = require("mongoose")

// models
const User = require("../models/user-model")
const Workout = require("../models/workout-model")

const getHomePage = async (req, res, next) => {

    const { userID } = req.body.userData

    // console.log(req.body)

    let loggedInUser

    try {
        loggedInUser = await User.findById(userID)
    } catch(err) {
        console.log(`Error finding user: ${err}`)
        return next(
            new HttpError(
                "Could not find this user. Please try again!", 500
            )
        )
    }

    let workouts

    // find workouts for the logged in user

    try {
        workouts = await Workout.find({ workoutCreator: loggedInUser._id})

    } catch(err) {
        console.log(`Error finding workouts for user. ${err}`)
        return next(
            new HttpError(
                "Could not find workouts for this user. Please try again!", 500
            )
        )
        }

    // console.log("Reached backend HomePage route")

    res.json({ message: "Found user and their workouts!", user: loggedInUser, workouts: workouts, mainLiftMaxes: loggedInUser.mainLiftMaxes })
}

exports.getHomePage = getHomePage