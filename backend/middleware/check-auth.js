const HttpError = require("../models/http-error")
const jwt = require('jsonwebtoken')

// grab token from attached headers in frontend
// allowed because of Authorization header we set in app.js

module.exports = (req, res, next) => {
    // will be Authorization : 'Bearer TOKEN' so we need split and grab the second item in the newly created array

    // on certain requests, the browser sets the method to Options automatically. This code is a workaround and will allow our POST requests to continue
    if (req.method === "OPTIONS") {
        return next()
    }

    try {
        const token = req.headers.authorization.split(' ')[1]

        // for if authorization isn't set at all and so .split() failed
        if (!token) {
            throw new Error(
                'Authentication failed. No authorization! Please try again!', 401
            )
        }

        // use jsonwebtoken package to verify the token matches the user
        // returns an object that has the parts of the user object that we added to the token payload in our auth controllers
        // if this didn't fail, then we know the user was authenticated and can move forward
        const decodedToken = jwt.verify(token, 'secret_key')

        // add our userID to the req body and can now be used in following middleware
        req.userData = { userID: decodedToken.userID }
        
        // call next and allow the request to continue through the rest of our API
        next();

    } catch (err) {
        // .split() worked, but the token is incorrect
        const error = new HttpError(
            'Authentication failed. IN ERROR BLOCK. Please try again!', 401
        )
    
        return next(error)
    }
    
}