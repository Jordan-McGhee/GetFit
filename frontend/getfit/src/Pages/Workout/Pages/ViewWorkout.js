import { DUMMY_WORKOUT } from "../../../DUMMY/DUMMY_DATA";

import React, { useState, useEffect } from "react";

import Button from "../../../Components/FormElements/Button";
import { useParams } from "react-router-dom";
import { useFetch } from "../../../Hooks/useFetch";

const ViewWorkout = props => {

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

    return (
        <div>
            <h1>
                { loadedWorkout && loadedWorkout.workoutTitle}
            </h1>

            <ul>

                {/* ITERATE OVER EXERCISES TO DISPLAY THEM */}
                { loadedWorkout && loadedWorkout.exercises.map(exercise => (
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
                    link = {`/workout/${workoutID}/edit`}
                    type = "text"
                    text = "Edit Workout"
                />
            </footer>
        </div>
    )
}

export default ViewWorkout