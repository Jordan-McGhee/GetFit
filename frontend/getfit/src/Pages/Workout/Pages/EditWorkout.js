import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { useFetch } from "../../../Hooks/useFetch";

import Button from "../../../Components/FormElements/Button";
import Input from "../../../Components/FormElements/Input";
import ExerciseInput from "../Components/ExerciseInput";
import Card from "../../../Components/UIElements/Card";
import LoadingSpinner from "../../../Components/UIElements/LoadingSpinner";
import ErrorModal from "../../../Components/UIElements/ErrorModal";

import { AuthContext } from "../../../Context/auth-context";

const EditWorkout = props => {

    // AUTH
    const auth = useContext(AuthContext)

    let exerciseInputs = []

    const [ loadedWorkout, setLoadedWorkout ] = useState(null)
    const [ loadedExercises, setLoadedExercises ] = useState(null)
    const [ exerciseInputsList, setExerciseInputsList ] = useState(exerciseInputs)
    const [ inputCount, setInputCount ] = useState(0)

    const { isLoading, hasError, sendRequest, clearError } = useFetch()

    const workoutID = useParams().workoutID

    useEffect(() => {

        const fetchWorkout = async () => {

            try {
                const responseData = await sendRequest(
                    // URL
                    `http://localhost:5000/workout/${workoutID}/view`,
                    // METHOD
                    'GET',
                    // HEADERS
                    {
                        Authorization: 'Bearer ' + auth.token
                    }
                )

                // console.log(responseData.message)
                // console.log(responseData.workout)

                setLoadedWorkout(responseData.workout)
                setLoadedExercises(responseData.workout.exercises)
                setInputCount(responseData.workout.exercises.length)

            } catch(err) {
                console.log(err)
            }

        }

        fetchWorkout()

    }, [ sendRequest, workoutID ])

    // console.log(`Before exerciseInputs: ${loadedExercises}`)
    // console.log(`Input Count: ${inputCount}`)

    let newInput = 
        <ExerciseInput
            inputNumber = { exerciseInputs.length + inputCount + 1}
            key = { exerciseInputs.length + inputCount + 1}
        />

    // addInput handler function
    const addExerciseInput = () => {
        setExerciseInputsList([ ...exerciseInputsList, newInput ])
        setInputCount(inputCount + 1)
    }

    const submitHandler = async (event) => {
        event.preventDefault()

        let target = event.target

        // similar code to what's in NewWorkout
        // looping over the form inputs and appending them to the data I send to the backend

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

        formData.workoutTitle = target[0].value

        for (let i = 1; i < target.length-3; i++) {
            // first input for exercise
            if (i%4 === 1) {
                exercise.exerciseName = target[i].value
                // console.log(`Exercise Title: ${target[i].value} index: ${i}`)
            // second input
            } else if (i%4 === 2) {
                exercise.sets = target[i].value
                // console.log(`Exercise Sets: ${target[i].value} index: ${i}`)
            // third input
            } else if (i%4 === 3) {
                exercise.reps = target[i].value
                // console.log(`Exercise Reps: ${target[i].value} index: ${i}`)
            // last input, push to exercise array and reset exercise object
            } else {
                exercise.weightUsed.push(target[i].value)
                // console.log(`Exercise Weight Used: ${exercise.weightUsed} index: ${i}`)
                // console.log(`Full Exercise:
                //     ${exercise.exerciseName}
                //     ${exercise.sets}
                //     ${exercise.reps}
                //     ${exercise.weightUsed}
                // `)

                // Add newly created exercise to array in formData object
                formData.exercises.push(exercise)

                // reset exercise variable. Only really necessary for the weightUsed array
                exercise = {
                    exerciseName: "",
                    sets: 0,
                    reps: 0,
                    weightUsed: []
                }
            }
        }

        // send request to backend to update
        try {
            await sendRequest(
                // URL
                `http://localhost:5000/workout/${workoutID}`,
                // METHOD
                "PATCH",
                // HEADERS
                {
                    'Content-Type': 'application/json'
                },
                // BODY
                JSON.stringify({
                    workoutTitle: formData.workoutTitle,
                    exercises: formData.exercises
                })
            )
        } catch(err) {
            console.log("Error updating workout")
            console.log(err)
        }
    }

    return (

        <React.Fragment>

        <ErrorModal error = { hasError } onClear = { clearError } />

        { isLoading &&
            <div>
                <LoadingSpinner asOverlay />
            </div>
        }

            { !isLoading && loadedWorkout && (
                <Card header = { <h2>Edit Workout: {loadedWorkout.workoutTitle}</h2>}>
                    <form onSubmit={ submitHandler }>

                        {
                            loadedWorkout && 
                            <Input
                                id="workoutTitle"
                                label = "Workout Title"
                                type="text"
                                value = { loadedWorkout.workoutTitle }
                            />
                        }

                        <ul>
                            {
                                loadedWorkout && loadedWorkout.exercises.map(exercise => (
                                    <li key = { exercise.id }>
                                        <ExerciseInput
                                            exerciseName = { exercise.exerciseName }
                                            exerciseSets = { exercise.sets }
                                            exerciseReps = { exercise.reps }
                                            exerciseWeightUsed = { exercise.weightUsed }
                                        />
                                    </li>
                                ))
                            }
                        </ul>

                        
                        { exerciseInputsList }

                        { inputCount < 10 &&
                            <Button
                            type = "button"
                            onClick = { addExerciseInput }
                            text = "Add Another Exercise"
                            />
                        }

                        <footer>
                            <Button
                                link = {`/workout/${workoutID}/view`}
                                type = "text"
                                text = "Discard Changes"
                            />
                            <Button
                                type = "submit"
                                text = "Save Changes"
                            />
                        </footer>
                        
                    </form>
                </Card>
            )}

        </React.Fragment>
    )
}

export default EditWorkout