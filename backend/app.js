const express = require("express")
const bodyParser = require("body-parser")
const MongoClient = require("mongodb").MongoClient
const mongoose = require("mongoose")
const HttpError = require("./models/http-error")

// FOR CONNECTING TO MONGODB SERVER
const password = "KIV8qYHrFoWOPhPy"
const url = `mongodb+srv://JordanMcGhee:${password}@getfit.itq1bft.mongodb.net/GetFit?retryWrites=true&w=majority`

// connecting to database
mongoose.connect(url).then(() =>{
    console.log("Connected to database!")
}).catch(() => {
    console.log("Could not connect to database.")
})

// middleware to check token
const checkAuth = require('./middleware/check-auth')

// ROUTE VARIABLES
const homepageRoutes = require("./routes/homepage-routes")
const authRoutes = require("./routes/auth-routes")
const userRoutes = require("./routes/user-routes")
const workoutRoutes = require("./routes/workout-routes")

const app = express()

// want to parse the information we receive from the user before it reaches our other middlewares
// this converts all incoming json data into regular javascript
app.use(bodyParser.json())

// middleware to work around CORS errors since our front and backend are on separate servers
// attaches headers on its responses to prevent the browser from blocking the response
app.use((req, res, next) => {
    // determines which domains have access, the * means all are acceptable
    res.setHeader("Access-Control-Allow-Origin", "*")

    // specifies which headers are allowed on incoming requests to be handled by this API
    // Content-Type and Authorization are the only 2 that aren't default in this group
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-Width, Content-Type, Accept, Authorization")

    // allowed methods for incoming requests
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE")
    
    next()
})


app.use("/auth", authRoutes)

// checks for user token before allowing anyone to access following routes/middleware
app.use(checkAuth)
app.use("/", homepageRoutes)
app.use("/user", userRoutes)
app.use("/workout", workoutRoutes)

// middleware for requests that didn't get a response from our above routes
// if a user goes to a page that isn't part of our API
// make sure to pass the new error object we created through next so it enters our default error middleware below
app.use((req, res, next) => {
    const error = new HttpError("Could not find this page!", 404)
    next(error)
})

// ERROR ROUTE
// middleware with 4 parameters is treated as a special middleware by express and will only be executed on requests that have an error associated with it
app.use((error, req, res, next) => {

    // checks to see if we've already sent the error response with a header to the end user
    if (res.headerSent) {
        return next(error)
    }

    // if we reach this code, no error message has been sent, so we will send one now
    // Checks for a code/message attached to the error object, or sets it to 500 and a default error message
    // this is triggered by either throwing an error or passing an error to next() in our routes
    // HAS TO BE PASSED IN NEXT() IF ASYNC CODE
    res
        .status(error.code || 500)
        .json({message: error.message || "Something went wrong!"})

})

app.listen(5000)