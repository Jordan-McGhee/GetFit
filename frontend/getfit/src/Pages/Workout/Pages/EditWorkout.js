import { DUMMY_WORKOUT } from "../../../DUMMY/DUMMY_DATA";

import React from "react";
import { useParams } from "react-router-dom";

import Button from "../../../Components/FormElements/Button";
import Input from "../../../Components/FormElements/Input";
import ExerciseInput from "../Components/ExerciseInput";
import Card from "../../../Components/UIElements/Card";

const EditWorkout = props => {

    // CODE FOR WHEN CONNECTING TO BACKEND/DATABASE
    // const params = useParams()

    // const workout = 

    const workout = DUMMY_WORKOUT
    const exercises = workout.exercises

    const submitHandler = event => {
        event.preventDefault()


    }

    return (
        <Card>
            <form onSubmit={ submitHandler }>
                <Input
                    id="workoutTitle"
                    type="text"
                    value = { workout.workoutTitle }
                />

                <ul>
                    {
                        exercises.map(exercise => (
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
                        link = {`/workout/${workout.id}/view`}
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