import React from "react";

import Input from "../../../Components/FormElements/Input";
import ExerciseInput from "../Components/ExerciseInput";

const NewWorkout = () => {

    const submitHandler = event => {
        event.preventDefault()

        
    }

    return (
        <div>

            <h1>New Workout</h1>

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

                <button type="submit">Create Workout</button>

            </form>

        </div>
    )
}

export default NewWorkout