import React, { useState, useContext } from "react";

import Input from "../../Components/FormElements/Input";
import Button from "../../Components/FormElements/Button";
import Card from "../../Components/UIElements/Card";
import ErrorModal from "../../Components/UIElements/ErrorModal";
import LoadingSpinner from "../../Components/UIElements/LoadingSpinner";

import { useFetch } from "../../Hooks/useFetch";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../Context/auth-context";

import "./AuthPage.css"

const AuthPage = () => {

    // import our context in order to update it upon signing in/logging up
    const auth = useContext(AuthContext)
    const navigate = useNavigate()
    
    // need to have state for logging in/signing up
    // signup and login forms
    
    const [ isLoggingIn, setIsLoggingIn ] = useState(true)
    const { isLoading, hasError, sendRequest, clearError } = useFetch()
    
    const  [ isGuest, setIsGuest ] = useState(false)

    const changeLoginHandler = () => {
        if (isLoggingIn) {
            setIsLoggingIn(false)
        } else {
            setIsLoggingIn(true)
        }
    }

    let loginForm

    // render different versions of form conditionally based on if the user is logging in or signing up
    if (isLoggingIn) {
        loginForm = (
            <div>

                {/* email */}
                <Input
                    id = "email"
                    type = "text"
                    label = "Email"
                    placeholder = "Enter your email"
                    errorText = "Please enter a valid email!"
                />

                {/* password */}
                <Input
                    id = "password"
                    type = "password"
                    label = "Password"
                    placeholder = "Enter your password"
                    errorText = "Password must be at least 8 characters long"
                />
                
            </div>
        )
    } else {
        loginForm = (
            <div>
                {/* first name */}
                <Input
                    id = "firstName"
                    type = "text"
                    label = "First Name"
                    placeholder = "Enter your first name"
                    errorText = "First name can't be blank!"
                />
                
                {/* last name */}
                <Input
                    id = "lastName"
                    type = "text"
                    label = "Last Name"
                    placeholder = "Enter your last name"
                    errorText = "Last name can't be blank!"
                />

                {/* email */}
                <Input
                    id = "email"
                    type = "text"
                    label = "Email"
                    placeholder = "Enter your email"
                    errorText = "Please enter a valid email!"
                />

                {/* password */}
                <Input
                    id = "password"
                    type = "password"
                    label = "Password"
                    placeholder = "Enter your password"
                    errorText = "Password must be at least 8 characters long"
                />
            </div>

        )
    }
    
    const formSubmitHandler = async event => {
        event.preventDefault()

        // console.log("Entered Form Submit")

        // iterate over inputs and append to form data
        // conditional check for logging in or signing up to determine how many inputs to iterate over
        
        let target = event.target
        
        let formData, url

        if (isLoggingIn) {

            if (isGuest) {

                console.log("Entered Guest Block of Log In")
                formData = {
                    email: 'test@test.com',
                    password: '12345678'
                }
            } else {
                formData = {
                    email: "",
                    password: ""
                }
    
                formData.email = target[0].value
                formData.password = target[1].value
    
                
            }

            url = 'http://localhost:5000/auth/login'

        } else {
            formData = {
                firstName: "",
                lastName: "",
                email: "",
                password: ""
            }

            formData.firstName = target[0].value
            formData.lastName = target[1].value
            formData.email = target[2].value
            formData.password = target[3].value

            url = 'http://localhost:5000/auth/signup'
        }

        let responseData

        try {
            responseData = await sendRequest(
                // URL
                url,
                // METHOD
                "POST",
                // HEADERS
                {
                    'Content-Type': 'application/json'
                },
                // BODY
                JSON.stringify(formData)
            )

            // assume form submission was successful if we reach this point. Login and navigate to the home page if so. Also grab userID from the backend's response
            auth.login(responseData.userID, responseData.token)
            navigate('/')
        } catch(err) {

        }
    }

    const cardFooter = (
        <div>
            {/* <Button
                type = "button"
                text = { isLoggingIn ? "I need an account" : "I already have an account"}
                onClick = { changeLoginHandler }
            /> */}

            { isLoggingIn && 
                <Button
                    type = 'submit'
                    text = 'Log In As Guest'
                    onClick = { () => setIsGuest(true) }
                    className = 'button border border-gray-2 rounded-md shadow hover:cursor-pointer bg-sky-500 text-white hover:bg-sky-900 hover:scale-105'
                />
            }

            <Button
                type = "submit"
                text = { isLoggingIn ? "Log In" : "Sign Up"}
                className = "ml-2 button border border-gray-1 rounded-md shadow hover:cursor-pointer hover:scale-105"
            />
    </div>
    )

    return (
        <div className = "max-w-lg auth-form flex-auto shadow-xl shadow-gray-1">

            <ErrorModal error = { hasError } onClear = { clearError } />

            { 
                isLoading &&
                <LoadingSpinner asOverlay />
            }

            <form onSubmit={ formSubmitHandler }>
                <Card
                    header = { isLoggingIn ? "Log In" : "Create Account"}
                    footer = { cardFooter }
                    // className = "flex flex-col p-6 rounded-lg m-2"
                >

                        { loginForm }

                    <p className = 'my-2'
                    onClick = { changeLoginHandler }>{ isLoggingIn ? "Need an account?" : "Already have an account?"} <span className="italic border-b-2 hover:cursor-pointer">Click here</span>.</p>
                </Card>
            </form>

        </div>
    )

}

export default AuthPage