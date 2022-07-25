const HttpError = require("../models/http-error")
const mongoose = require("mongoose")

// models
const User = require("../models/user-model")
const Workout = require("../models/workout-model")

const getHomePage = async (req, res, next) => {

    // UPDATE CODE TO PULL DATA FOR LOGGED IN USER!!!!
    let loggedInUser

    try {
        loggedInUser = await User.findById("62df2accc886aa06f5636310")
    } catch(err) {
        console.log(`Error finding user: ${err}`)
        return next(
            new HttpError(
                "Could not find this user. Please try again!", 500
            )
        )
    }

    // find workouts for the logged in user
    let workouts

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

    if (!workouts) {
        workouts = []
    }

    res.json({ message: "Found user and their workouts!", user: loggedInUser, workouts: workouts })
}

exports.getHomePage = getHomePage