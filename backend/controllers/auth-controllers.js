const HttpError = require("../models/http-error")
const { validationResult } = require("express-validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

// models
const User = require("../models/user-model")

const signUp = async (req, res, next) => {

    // looks into req object and checks for any validation errors that were picked up. Returns an object
    const errors = validationResult(req)

    // check to see if there are any errors and throw error if so
    if (!errors.isEmpty()) {

        console.log(errors)
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

    // use bcrypt to hash the entered password to protect the user's data
    let hashedPassword

    try {
        hashedPassword = await bcrypt.hash(password, 12)
    } catch(err) {
        console.log(`Error hashing password: ${err}`)
        return next(
            new HttpError(
                "Could not hash entered password. Please try again!", 500
            )
        )
    }

    // if we reach here, there aren't any errors with the inputs or an existing user, so we create a new user with the hashed password and save to the database
    const newUser = new User({
        firstName,
        lastName,
        email,
        password: hashedPassword
    })

    try {
        await newUser.save()
    } catch(err) {
        const error = new HttpError(
            "Signing up failed. Please try again!", 500
        )

        console.log(err)

        return next(error)
    }

    // this code generates a token from the server that will be attached to any requests to guarantee that the user submitting the request is the owner of the items
    let token

    try {

        // this code takes the data from the newUser and encodes it into a string (token) for verification
        token = jwt.sign(
            // data from newUser
            { userID: newUser.id, email: newUser.email },
            // key phrase, will change and hide later
            process.env.TOKEN_KEY,
            // token will automatically expire in an hour for better security
            { expiresIn: '1h'}
        )

    } catch(err) {
        const error = new HttpError(
            "Creating token failed. Please try again!", 500
        )

        console.log(err)

        return next(error)
    }


    // response
    res
        .status(201)
        .json({
            message: "Creating user successful!",
            userID: newUser.id,
            email: newUser.email,
            token: token
        })
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

    // check if entered password matches the hashed password in our database
    let isValidPassword = false

    try {
        isValidPassword = await bcrypt.compare(password, existingUser.password)
    } catch(err) {
        console.log(`Error comparing entered password to user's password. ${err}`)
        return next(
            new HttpError(
                "Could not log you in. Please try again!", 500
            )
        )
    }

    if (!isValidPassword) {
        return next(
            new HttpError(
                "Incorrect password. Please try again!", 401
            )
        )
    }

        // this code generates a token from the server that will be attached to any requests to guarantee that the user submitting the request is the owner of the items
        let token

        try {
    
            // this code takes the data from the existingUser and encodes it into a string (token) for verification
            token = jwt.sign(
                // data from existingUser
                { userID: existingUser.id, email: existingUser.email },
                // key phrase, will change and hide later
                process.env.TOKEN_KEY,
                // token will automatically expire in an hour for better security
                { expiresIn: '1h'}
            )
    
        } catch(err) {
            const error = new HttpError(
                `Creating token failed. Please try again! Token: ${process.env.TOKEN_KEY}`, 500
            )
    
            console.log(err)
    
            return next(error)
        }
    

    // else there were no issues
    // response
    res
    .status(201)
    .json({
        message: "Logging in successful!",
        userID: existingUser.id,
        email: existingUser.email,
        token: token
    })
    
    // res.json({message: "Successfully logged in!", user: existingUser.toObject({ getters: true })})
}

exports.signUp = signUp
exports.login = login