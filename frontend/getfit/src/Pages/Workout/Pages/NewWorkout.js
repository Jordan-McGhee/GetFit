import React, { useState, useContext } from "react";

import { useFetch } from "../../../Hooks/useFetch"
import { useNavigate } from "react-router-dom";

import Button from "../../../Components/FormElements/Button";
import Input from "../../../Components/FormElements/Input";
import Card from "../../../Components/UIElements/Card";
import ExerciseInput from "../Components/ExerciseInput";
import ErrorModal from "../../../Components/UIElements/ErrorModal";

import { AuthContext } from "../../../Context/auth-context";

const NewWorkout = () => {

    // AUTH
    const auth = useContext(AuthContext)

    // EXERCISE INPUT CODE
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

    // NAVIGATION CODE
    // state will grab the newly created workout's ID and we can use navigate to redirect to the view page upon creation
    let navigate = useNavigate()

    // this is for the discard button. Goes back to the last page -- need to add modal popup for confirm maybe?
    const discardHandler = () => {
        navigate(-1)
    }

    // FETCH CODE
    const { hasError, sendRequest, clearError } = useFetch()

    // errors in the form, will add to this array and prevent form submission if there are any
    const [ formHasErrors, setFormHasErrors ] = useState(false)

    const submitHandler = async (event) => {
        event.preventDefault()

        let errors = []

        let target = event.target

        // variables to add exercises to the body of the form data so it will save correctly to the backend
        let exercise = {
            exerciseName: "",
            sets: 0,
            reps: 0,
            weightUsed: []
        }

        // this is what the backend is expecting, so I will store everything here
        let formData = {
            workoutTitle: "",
            exercises: []
        }

        // GRABBING INPUTS FROM THE FORM SINCE THE LENGTH IS VARIABLE
        // grab first input value for workout title
        // loop over exercise inputs and add them to exercise object
        // push newly created exercise object into formData.exercises array and reset as I iterate
        
        target[0].value ? formData.workoutTitle = target[0].value : errors.push('Please enter a title for your workout!')

        // variable to track which exercise we are inputting
        let count = 1

        for (let i = 1; i < target.length-3; i++ ) {
            // first input for exercise
            if (i%4 === 1) {
                target[i].value ? exercise.exerciseName = target[i].value : errors.push(`Please enter a name for exercise ${count}!`)

                // exercise.exerciseName = target[i].value
                // console.log(`Exercise Title: ${target[i].value}`)
            // second input
            } else if (i%4 === 2) {
                target[i].value ? exercise.exerciseName = target[i].value : errors.push(`Please enter the set count for exercise ${count}!`)

                // exercise.sets = target[i].value
                // console.log(`Exercise Sets: ${target[i].value}`)
            // third input
            } else if (i%4 === 3) {
                target[i].value ? exercise.reps = target[i].value : errors.push(`Please enter the rep count for exercise ${count}!`)

                // exercise.reps = target[i].value
                // console.log(`Exercise Reps: ${target[i].value}`)
            // last input, push to exercise array and reset exercise object
            } else {
                target[i].value ? exercise.weightUsed.push(target[i].value) : errors.push(`Please enter the weight you used for exercise ${count}!`)

                // exercise.weightUsed.push(target[i].value)
                // console.log(`Exercise Weight Used: ${exercise.weightUsed}`)
                // console.log(`Full Exercise:
                //     ${exercise.exerciseName}
                //     ${exercise.sets}
                //     ${exercise.reps}
                //     ${exercise.weightUsed}
                // `)

                // Add newly created exercise to array in formData object
                formData.exercises.push(exercise)
                count++

                // reset exercise variable. Only really necessary for the weightUsed array
                exercise = {
                    exerciseName: "",
                    sets: 0,
                    reps: 0,
                    weightUsed: []
                }
            }
        }

        // if there are any errors, prevent form submission
        if (errors.length > 0) {
            // console.log(errors)
            setFormHasErrors(true)
            // console.log(formHasErrors)
            return
        }

        let responseData

        // send the request to the backend to save
        try {
            responseData = await sendRequest(
                // URL
                "http://localhost:5000/workout/",
                // METHOD
                "POST",
                // HEADERS
                {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + auth.token
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

        // grab the newly created workout's id and navigate to the correct page for it
        const nextPageID = responseData.workout.id

        const navigateHandler = () => navigate(`/workout/${nextPageID}/view`)

        // NAVIGATE TO CREATED WORKOUT'S PAGE AFTER SHORT TIMEOUT TO MAKE SURE THE RESPONSE GOES THROUGH
        setTimeout(navigateHandler, 500)
    }

    const clearFormErrorHandler = () => {
        setFormHasErrors(false)
    }


    // footer for form card
    const newWorkoutFooter = (
        <div>
            <Button
                // link = {"/"}
                onClick = { discardHandler }
                type = "button"
                text = "Discard"
            />
            <Button 
                type = "submit"
                text = "Create Workout"
                className = 'ml-2 button border border-gray-1 rounded-md shadow hover:cursor-pointer'
            />
        </div>
    )

    return (
        
        <React.Fragment>

            <ErrorModal error = { hasError } onClear = { clearError } />

            { 
                formHasErrors &&
                <ErrorModal error = { 'Could not create workout! Please make sure the form is filled out correctly.' } onClear = { clearFormErrorHandler }/>
            }
            

            <form onSubmit={ submitHandler }>

                <Card header = {"New Workout"} footer = { newWorkoutFooter }>

                        <Input
                            id = "workoutTitle"
                            label = "Workout Title"
                            type = "text"
                            placeholder = "Enter a title."
                            errorText = "Please enter a title!"
                        />

                        { exerciseInputsList }
                        
                        { exerciseInputsList.length < 10 &&
                            <Button
                                type = "button"
                                onClick = { addExerciseInput }
                                text = "Add Another Exercise"
                                className = 'max-w-xs button border border-gray-1 rounded-md shadow hover:cursor-pointer'
                            />
                        }

                </Card>

            </form>

        </React.Fragment>
    )
}

export default NewWorkout