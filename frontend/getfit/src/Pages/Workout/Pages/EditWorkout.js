import { DUMMY_WORKOUT } from "../../../DUMMY/DUMMY_DATA";

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useFetch } from "../../../Hooks/useFetch";

import Button from "../../../Components/FormElements/Button";
import Input from "../../../Components/FormElements/Input";
import ExerciseInput from "../Components/ExerciseInput";
import Card from "../../../Components/UIElements/Card";

const EditWorkout = props => {

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
                const responseData = await sendRequest(`http://localhost:5000/workout/${workoutID}/view`)

                console.log(responseData.message)
                console.log(responseData.workout)

                setLoadedWorkout(responseData.workout)
                setLoadedExercises(responseData.workout.exercises)
                setInputCount(responseData.workout.exercises.length)

            } catch(err) {
                console.log(err)
            }

        }

        fetchWorkout()

    }, [ sendRequest, workoutID ])

    console.log(`Before exerciseInputs: ${loadedExercises}`)
    console.log(`Input Count: ${inputCount}`)

    let newInput = 
        <ExerciseInput
            inputNumber = { exerciseInputs.length + inputCount + 1}
            key = { exerciseInputs.length + inputCount + 1}
        />

    // addInput handler function
    const addExerciseInput = () => {
        setExerciseInputsList([ ...exerciseInputsList, newInput ])
        setInputCount(inputCount + 1)
        console.log(exerciseInputsList)
    }

    const submitHandler = event => {
        event.preventDefault()


    }

    return (
        <div>
            { !isLoading && loadedWorkout && (
                <Card>
                    <form onSubmit={ submitHandler }>

                        {
                            loadedWorkout && 
                            <Input
                                id="workoutTitle"
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
        </div>
    )
}

export default EditWorkout