const HttpError = require("../models/http-error")
const { validationResult, body } = require("express-validator")
const mongoose = require("mongoose")

// models
const User = require("../models/user-model")
const Workout = require("../models/workout-model")

const createWorkout = async (req, res, next) => {

    // looks into req object and checks for any validation errors that were picked up. Returns an object
    const errors = validationResult(req)

    // check to see if there are any errors and throw error if so
    if (!errors.isEmpty()) {
        console.log(errors)
        throw new HttpError("Your workout needs a title! Please try again.")
    }

    // placeholder code to find the logged in user. Need to change once authentication is added!!!!
    let user

    try {
        user = await User.findById("62dc8ebede986f891ffd0388")
    } catch(err) {
        console.log(`Error finding user: ${err}`)
        const error = new HttpError(
            "Could not find this user. Please try again!",
            500
        )

        return next(err)
    }

    // grab input data from user and create new workout with it
    const { workoutTitle, exercises } = req.body

    const newWorkout = new Workout({
        workoutTitle,
        workoutCreator: user,
        exercises
    })

    // running multiple save() methods, so need to start a session with transactions so either everything is saved and updated together or nothing is

    try {
        const session = await mongoose.startSession()
        session.startTransaction()

        await newWorkout.save({ session: session })

        user.workouts.push(newWorkout)
        await user.save({ session: session })

        // close the session only if everything was successful
        await session.commitTransaction()

    } catch(err) {
        console.log(`Failed session, could not create workout and update user: ${err}`)
        const error = new HttpError(
            "Creating workout failed. Please try again!", 500
        )

        return next(err)
    }

    res.status(201).json({ message: "Created workout!", workout: newWorkout.toObject( { getters: true } ), user: user})
}

const getWorkout = async (req, res, next) => {
    let workout

    try {
        workout = await Workout.findById(req.params.workoutID)
    } catch(err) {
        console.log(`Error trying to find workout ${err}`)
        const error = new HttpError(
            `Something went wrong finding this workout. Please try again!`, 500
        )
        
        return next(error)
    }

    if (!workout) {
        const error = new HttpError(
            "Could not find that workout!", 404
        )

        return next(error)
    }

    res.json({ message: "Found the workout!", workout: workout.toObject({ getters: true }) })
}

exports.createWorkout = createWorkout
exports.getWorkout = getWorkout