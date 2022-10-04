const HttpError = require("../models/http-error")
const { validationResult, body } = require("express-validator")
const mongoose = require("mongoose")

// models
const User = require("../models/user-model")

const updateUserInfo = async (req, res, next) => {

    // find user from Database. Should've just created an account if they reach this function
    let user

    try {
        user = await User.findById(req.params.userID)
    } catch(err) {
        console.log(`Locating user failed: ${err}`)
        const error = new HttpError(
            "Something went wrong. Could not find this user.",
            500
        )

        return next(error)
    }

    // grab lifts to update user from req.body
    // const { age, bodyWeight, benchPress, squat, deadlift, overHeadPress } = req.body
    const { benchPress, squat, deadlift, overHeadPress } = req.body

    // update age & bodyweight from user input
    // user.age = age
    // user.bodyWeight = bodyWeight

    // update lifts from user input
    user.mainLiftMaxes.benchPress = benchPress
    user.mainLiftMaxes.squat = squat
    user.mainLiftMaxes.deadlift = deadlift
    user.mainLiftMaxes.overHeadPress = overHeadPress

    try {
        await user.save()
    } catch(err) {
        console.log(`Updating user failed: ${err}`)
        const error = new HttpError(
            "Something went wrong! Could not update your main lifts. Please try again!",
            500
        )

        return next(err)
    }

    const mainLifts = user.mainLiftMaxes

    res.status(200).json({ message: "Updated user info!", mainLifts: mainLifts, user: user })
}
exports.updateUserInfo = updateUserInfo