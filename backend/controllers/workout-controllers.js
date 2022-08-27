const HttpError = require("../models/http-error")
const { validationResult, body } = require("express-validator")
const mongoose = require("mongoose")

// models
const User = require("../models/user-model")
const Workout = require("../models/workout-model")

const createWorkout = async (req, res, next) => {

    const { userID } = req.body.userData

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
        user = await User.findById(userID)
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

const updateWorkout = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        console.log(errors)
        return next(
            new HttpError("Your workout title can't be empty!", 422)
        )
    }

    let updatedWorkout

    try {
        updatedWorkout = await Workout.findById(req.params.workoutID)
    } catch(err) {
        console.log(`Error trying to find workout. ${err}`)
        return next(
            new HttpError(
                "Could not find this workout. Please try again!", 500
            )
        )
    }

    // ADD CODE TO VALIDATE USER THAT IS EDITING THIS WORKOUT IS THE USER THAT CREATED IT!!!

    const { workoutTitle, exercises } = req.body

    updatedWorkout.workoutTitle = workoutTitle
    updatedWorkout.exercises = exercises

    try {
        await updatedWorkout.save()
    } catch(err) {
        console.log(`Error trying to save updated workout ${err}`)
        return next(
            new HttpError(
                "Could not update this workout. Please try again!", 500
            )
        )
    }

    res.status(200).json({ message: "Updated workout!", updatedWorkout: updatedWorkout})
}

const deleteWorkout = async (req, res, next) => {

    let workout

    try {
        workout = await Workout.findById(req.params.workoutID).populate("workoutCreator")
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

    // console.log(`Workout Creator Workouts: ${workout.workoutCreator.workouts}`)

    try {

        const session = await mongoose.startSession()
        session.startTransaction()

        await workout.remove({ session: session })

        workout.workoutCreator.workouts.pull(workout)
        await workout.workoutCreator.save({ session: session })

        await session.commitTransaction()

    } catch(err) {
        console.log(`Error trying to delete workout: ${err}`)
        const error = new HttpError(
            `Error trying to delete the workout. Please try again!`, 500
        )

        return next(error)
    }

    res.status(200).json({ message: "Deleted workout."})
}

exports.createWorkout = createWorkout
exports.getWorkout = getWorkout
exports.updateWorkout = updateWorkout
exports.deleteWorkout = deleteWorkout