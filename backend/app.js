const express = require("express")
const bodyParser = require("body-parser")
const MongoClient = require("mongodb").MongoClient
const mongoose = require("mongoose")

// FOR CONNECTING TO MONGODB SERVER
const password = "KIV8qYHrFoWOPhPy"
const url = `mongodb+srv://JordanMcGhee:${password}@getfit.itq1bft.mongodb.net/GetFit?retryWrites=true&w=majority`

// connecting to database
mongoose.connect(url).then(() =>{
    console.log("Connected to database!")
}).catch(() => {
    console.log("Could not connect to database.")
})

// ROUTE VARIABLES
// const homepageRoutes = require("./routes/homepage-routes")
const authRoutes = require("./routes/auth-routes")
const userRoutes = require("./routes/user-routes")
const workoutRoutes = require("./routes/workout-routes")

const app = express()

// want to parse the information we receive from the user before it reaches our other middlewares
// this converts all incoming json data into regular javascript
app.use(bodyParser.json())

// app.use("/", homepageRoutes)
app.use("/auth", authRoutes)
app.use("/user", userRoutes)
app.use("/workout", workoutRoutes)




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