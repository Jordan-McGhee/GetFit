import React, { useState } from "react";
import Button from "../../../Components/FormElements/Button";

import Input from "../../../Components/FormElements/Input";
import Card from "../../../Components/UIElements/Card";
import ExerciseInput from "../Components/ExerciseInput";

const NewWorkout = () => {

    let exerciseInputs = [
        <ExerciseInput />,
        <ExerciseInput />,
        <ExerciseInput />
    ]

    let newInput = <ExerciseInput />

    const [ exerciseInputsList, setExerciseInputsList ] = useState(exerciseInputs)

    const addExerciseInput = () => {
        setExerciseInputsList([ ...exerciseInputsList, newInput ])
    }

    const submitHandler = event => {
        event.preventDefault()


    }

    const newWorkoutFooter = (
        <div>
            <Button
                type = "text"
                text = "Discard"
            />
            <Button 
                type = "submit"
                text = "Create Workout"
            />
        </div>
    )

    console.log(exerciseInputsList)


    return (
        
        <Card header = {"New Workout"} footer = { newWorkoutFooter }>

            <form onSubmit={ submitHandler }>
                <Input
                    id = "workoutTitle"
                    label = "Workout Title"
                    type = "text"
                    placeholder = "Enter a title."
                    errorText = "Please enter a title!"
                />

                { exerciseInputsList }

                <Button
                    type = "button"
                    onClick = { addExerciseInput }
                    text = "Add Another Exercise"
                />

            </form>

        </Card>
    )
}

export default NewWorkout