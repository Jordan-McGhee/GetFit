import React, { useState } from "react";
import Button from "../../../Components/FormElements/Button";

import Input from "../../../Components/FormElements/Input";
import Card from "../../../Components/UIElements/Card";
import ExerciseInput from "../Components/ExerciseInput";

const NewWorkout = () => {

    // starting list of inputs for newWorkout form
    let exerciseInputs = [
        <ExerciseInput inputNumber = { 1 } key = { 1 } />,
        <ExerciseInput inputNumber = { 2 } key = { 2 } />,
        <ExerciseInput inputNumber = { 3 } key = { 3 } />
    ]

    // states to update the array of exerciseInputs and input counter to pass via props to individual imports
    const [ exerciseInputsList, setExerciseInputsList ] = useState(exerciseInputs)
    const [ inputCount, setInputCount ] = useState(1)

    // newInput to push to inputs array
    let newInput =
        <ExerciseInput
            inputNumber = { exerciseInputs.length + inputCount }
            key = { exerciseInputs.length + inputCount }
        />

    // addInput handler function
    const addExerciseInput = () => {
        setExerciseInputsList([ ...exerciseInputsList, newInput ])
        setInputCount(inputCount + 1)
        console.log(exerciseInputsList)
    }

    const submitHandler = event => {
        event.preventDefault()

        // reset form inputs after
        setExerciseInputsList(exerciseInputs)
        setInputCount(1)
    }

    // footer for form card
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

    // troubleshooting console.log
    // console.log(exerciseInputsList)


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