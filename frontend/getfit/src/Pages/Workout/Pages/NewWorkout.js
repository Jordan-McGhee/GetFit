import React from "react";
import Button from "../../../Components/FormElements/Button";

import Input from "../../../Components/FormElements/Input";
import Card from "../../../Components/UIElements/Card";
import ExerciseInput from "../Components/ExerciseInput";

const NewWorkout = () => {

    const submitHandler = event => {
        event.preventDefault()


    }

    return (
        
        <Card header = {"New Workout"}>

            <form onSubmit={ submitHandler }>
                <Input
                    id = "workoutTitle"
                    label = "Workout Title"
                    type = "text"
                    placeholder = "Enter a title."
                    errorText = "Please enter a title!"
                />

                <ExerciseInput />
                <ExerciseInput />
                <ExerciseInput />

                <footer>
                    <Button
                        type = ""
                        text = "Discard"
                    />
                    <Button 
                        type = "submit"
                        text = "Create Workout"
                    />
                </footer>

            </form>

        </Card>
    )
}

export default NewWorkout