const HttpError = require("../models/http-error")
const { validationResult } = require("express-validator")

// models
const User = require("../models/user-model")

const signUp = async (req, res, next) => {

    // looks into req object and checks for any validation errors that were picked up. Returns an object
    const errors = validationResult(req)

    // check to see if there are any errors and throw error if so
    if (!errors.isEmpty()) {
        return next(
            new HttpError(
                "There's something wrong with the information you entered. Please make sure you entered a valid email and password.",
                401
            )
        )
    }


    const { firstName, lastName, email, password } = req.body

    // check if a user exists with the given email first
    let existingUser

    try {
        existingUser = await User.findOne({ email: email })
    } catch(err) {
        const error = new HttpError(
            "Signing up failed. Please try again. Existing User Check", 500
        )

        console.log(err)

        return next(error)
    }

    if (existingUser) {
        const error = new HttpError(
            "A user already exists with this email. Try signing in!",
            422
        )

        return next(error)
    }

    // if we reach here, there aren't any errors with the inputs or an existing user, so we create a new one and save to the database
    const newUser = new User({
        firstName,
        lastName,
        email,
        password
    })

    try {
        await newUser.save()
    } catch(err) {
        const error = new HttpError(
            "Signing up failed. Please try again! Saving user check", 500
        )

        console.log(err)

        return next(error)
    }

    // response
    res.json({ message: "Creating user successful!", user: newUser.toObject({ getters: true }) })
}

const login = async (req, res, next) => {
    const { email, password } = req.body

    let existingUser

    try {
        existingUser = await User.findOne({ email: email })
    } catch(err) {
        const error = new HttpError(
            "Something went wrong trying to find the user. Please try again.", 500
        )

        return next(error)
    }

    if (!existingUser) {
        const error = new HttpError(
            "Could not find a user with that email. Maybe try signing up?",
            401
        )

        return next(error)
    }

    if (existingUser.password !== password) {
        const error = new HttpError(
            "Incorrect password. Please try again!", 401
        )

        return next(error)
    }

    // else there were no issues
    res.json({message: "Successfully logged in!", user: existingUser.toObject({ getters: true })})
}

exports.signUp = signUp
exports.login = login