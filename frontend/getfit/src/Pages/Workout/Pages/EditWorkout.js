import { DUMMY_WORKOUT } from "../../../DUMMY/DUMMY_DATA";

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useFetch } from "../../../Hooks/useFetch";

import Button from "../../../Components/FormElements/Button";
import Input from "../../../Components/FormElements/Input";
import ExerciseInput from "../Components/ExerciseInput";
import Card from "../../../Components/UIElements/Card";

const EditWorkout = props => {

    const [ loadedWorkout, setLoadedWorkout ] = useState(null)

    const { isLoading, hasError, sendRequest, clearError } = useFetch()

    const workoutID = useParams().workoutID

    useEffect(() => {

        const fetchWorkout = async () => {

            try {
                const responseData = await sendRequest(`http://localhost:5000/workout/${workoutID}/view`)

                console.log(responseData.message)
                console.log(responseData.workout)

                setLoadedWorkout(responseData.workout)

            } catch(err) {
                console.log(err)
            }

        }

        fetchWorkout()

    }, [ sendRequest, workoutID ])

    // let exercises = loadedWorkout.exercises

    
    const submitHandler = event => {
        event.preventDefault()


    }

    return (
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
    )
}

export default EditWorkout