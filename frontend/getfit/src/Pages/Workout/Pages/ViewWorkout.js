import React, { useState, useEffect, useContext } from "react";

// component imports
import Button from "../../../Components/FormElements/Button";
import Card from "../../../Components/UIElements/Card";
import LoadingSpinner from "../../../Components/UIElements/LoadingSpinner";
import ErrorModal from "../../../Components/UIElements/ErrorModal";
import DeleteWorkout from "../Components/DeleteWorkout";

// hook imports
import { useParams } from "react-router-dom";
import { useFetch } from "../../../Hooks/useFetch";
import { AuthContext } from "../../../Context/auth-context";

const ViewWorkout = props => {

    const auth = useContext(AuthContext)

    const [ loadedWorkout, setLoadedWorkout ] = useState(null)

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

            } catch(err) {
                console.log(err)
            }

        }

        fetchWorkout()

    }, [ sendRequest, workoutID, auth.token ])

    const workoutHeader = (
        <h1>
            { loadedWorkout && loadedWorkout.workoutTitle}
        </h1>
    )

    const [ showModal, setShowModal ] = useState(false)
    
    const showDeleteModalHandler = () => {
        setShowModal(true)
    }

    const closeDeleteModalHandler = () => {
        setShowModal(false)
    }

    const workoutFooter = (
        <div>
            <Button
                type = "text"
                text = "Delete Workout"
                onClick = { showDeleteModalHandler }
                className = "bg-red-500 button rounded-md shadow hover:cursor-pointer m-1"
            />
            <Button
                link = {`/workout/${workoutID}/edit`}
                type = "text"
                text = "Edit Workout"
            />
        </div>
    )


    return (
        <React.Fragment>

            <ErrorModal error = { hasError } onClear = { clearError } />

            { 
                isLoading &&
                <LoadingSpinner asOverlay />
            }

            {
                showModal && 
                <DeleteWorkout
                    workout = { loadedWorkout ? loadedWorkout : ""}
                    show = { showModal }
                    onCancel = { closeDeleteModalHandler }
                />
            }

            <Card header = { workoutHeader } footer = { workoutFooter } >

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

            </Card>

        </React.Fragment>
    )
}

export default ViewWorkout