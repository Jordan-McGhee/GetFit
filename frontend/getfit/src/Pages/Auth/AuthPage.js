import React, { useState } from "react";

import Input from "../../Components/FormElements/Input";
import Button from "../../Components/FormElements/Button";
import Card from "../../Components/UIElements/Card";

import { useFetch } from "../../Hooks/useFetch";

const AuthPage = () => {
    
    // need to have state for logging in/signing up
    // signup and login forms
    
    const [ isLoggingIn, setIsLoggingIn ] = useState(false)
    const { hasError, sendRequest, clearError } = useFetch()

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
                    errorText = "Name can't be blank!"
                />
                
                {/* last name */}
                <Input
                    id = "lastName"
                    type = "text"
                    label = "Last Name"
                    placeholder = "Enter your last name"
                    errorText = "Name can't be blank!"
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

    let formIsValid
    
    const formSubmitHandler = async event => {
        event.preventDefault()

        console.log("Entered Form Submit")

        // iterate over inputs and append to form data
        // conditional check for logging in or signing up to determine how many inputs to iterate over
        
        let target = event.target
        
        let formData, url

        if (isLoggingIn) {
            formData = {
                email: "",
                password: ""
            }

            formData.email = target[0].value
            formData.password = target[1].value

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



        console.log(formData)
        console.log(JSON.stringify(formData))

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
        } catch(err) {

        }

    }

    const cardFooter = (
        <div>
            <Button
                type = "button"
                text = { isLoggingIn ? "I need an account" : "I already have an account"}
                onClick = { changeLoginHandler }
            />

            <Button
                type = "submit"
                text = { isLoggingIn ? "Log In" : "Sign Up"}
                disabled = { formIsValid }
            />
    </div>
    )

    return (
        <React.Fragment>

            
        <form onSubmit={ formSubmitHandler }>
            <Card
                header = { isLoggingIn ? "Log In" : "Create Account"}
                footer = { cardFooter }
            >

                    { loginForm }

            </Card>
        </form>

        </React.Fragment>
    )

}

export default AuthPage