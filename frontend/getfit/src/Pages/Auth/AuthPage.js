import React, { useState } from "react";

import Input from "../../Components/FormElements/Input";
import Button from "../../Components/FormElements/Button";
import Card from "../../Components/UIElements/Card";

const AuthPage = () => {
    
    // need to have state for logging in/signing up
    // signup and login forms
    
    const [ isLoggingIn, setIsLoggingIn ] = useState(false)

    const changeLoginHandler = () => {
        if (isLoggingIn) {
            setIsLoggingIn(false)
        } else {
            setIsLoggingIn(true)
        }
    }

    const formSubmitHandler = event => {
        event.preventDefault()

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

    return (
        <React.Fragment>

            

            <Card
                header = { isLoggingIn ? "Log In" : "Create Account"}
                footer = {
                    <Button
                        type = "submit"
                        text = { isLoggingIn ? "Log In" : "Sign Up"}
                        disabled = { !formIsValid }
                    />
                }
            >

                <form onSubmit={ formSubmitHandler }>

                    { loginForm }

                </form>
            </Card>
        </React.Fragment>
    )

}

export default AuthPage