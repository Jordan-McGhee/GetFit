import React, { useState } from "react";

import { useFetch } from "../../../Hooks/useFetch"

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



    const { isLoading, hasError, sendRequest, clearError } = useFetch()

    const submitHandler = async (event) => {
        event.preventDefault()

        let target = event.target

        let exercise = {
            exerciseName: "",
            sets: 0,
            reps: 0,
            weightUsed: []
        }

        let formData = {
            workoutTitle: "",
            exercises: []
        }

        // grab first input value for workout title
        // loop over exercise inputs and add them to exercise object
        // push newly created exercise object into formData.exercises array and reset as I iterate

        formData.workoutTitle = target[0].value
        console.log(`Workout Title: ${formData.workoutTitle}`)
        exercise.exerciseName = target[1].value
        console.log(`Exercise 1 Name: ${exercise.exerciseName}`)

        for (let i = 1; i < target.length-2; i++ ) {
            // first input for exercise
            if (i%4 === 1) {
                exercise.exerciseName = target[i].value
                console.log(`Exercise Title: ${target[i].value}`)
            // second input
            } else if (i%4 === 2) {
                exercise.sets = Number(target[i].value)
                console.log(`Exercise Sets: ${target[i].value}`)
            // third input
            } else if (i%4 === 3) {
                console.log(`Entered Rep if/else. Index = $`)
                exercise.reps = Number(target[i].value)
                console.log(`Exercise Reps: ${target[i].value}`)
            // last input, push to exercise array and reset exercise object
            } else {
                exercise.weightUsed.push(Number(target[i].value))
                console.log(`Exercise Weight Used: ${exercise.weightUsed}`)
                // console.log(`Full Exercise:
                //     ${exercise.exerciseName}
                //     ${exercise.sets}
                //     ${exercise.reps}
                //     ${exercise.weightUsed}
                // `)

                formData.exercises.push(exercise)

                exercise = {
                    exerciseName: "",
                    sets: 0,
                    reps: 0,
                    weightUsed: []
                }
            }
        }

        try {
            await sendRequest(
                // URL
                "http://localhost:5000/workout/",
                // METHOD
                "POST",
                // HEADERS
                {
                    'Content-Type': 'application/json',
                },
                // BODY
                JSON.stringify({
                    workoutTitle: formData.workoutTitle,
                    exercises: formData.exercises
                })
            )
        } catch(err) {

        }

        // reset form inputs after
        setExerciseInputsList(exerciseInputs)
        setInputCount(1)
    }

    // footer for form card
    const newWorkoutFooter = (
        <div>
            <Button
                type = "button"
                text = "Discard"
            />
            <Button 
                type = "submit"
                text = "Create Workout"
            />
        </div>
    )


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
                
                { exerciseInputsList.length >= 3 && exerciseInputsList.length < 10 &&
                    <Button
                        type = "button"
                        onClick = { addExerciseInput }
                        text = "Add Another Exercise"
                    />
                }

                <button type="submit" >
                    Submit
                </button>

            </form>

        </Card>
    )
}

export default NewWorkout