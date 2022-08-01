import { DUMMY_WORKOUT } from "../../../DUMMY/DUMMY_DATA";

import React from "react";

import Button from "../../../Components/FormElements/Button";

const ViewWorkout = props => {

    const workout = DUMMY_WORKOUT
    const exercises = workout.exercises

    return (
        <div>
            <h1>
                { workout.workoutTitle}
            </h1>

            <ul>

                {/* ITERATE OVER EXERCISES TO DISPLAY THEM */}
                { exercises.map(exercise => (
                    <li key = { exercise.id }>
                        <h4>
                            { exercise.exerciseName }
                        </h4>

                        <div>
                            <p>{ exercise.sets } Sets</p>
                            <p>{ exercise.reps } Reps</p>
                            <p>{ exercise.weightUsed } Last Weight</p>
                        </div>
                    </li>
                ))}

            </ul>

            <footer>
                <Button
                    type = "text"
                    text = "Delete Workout"
                />
                <Button
                    link = {`/workout/${workout.id}/edit`}
                    type = "text"
                    text = "Edit Workout"
                />
            </footer>
        </div>
    )
}

export default ViewWorkout