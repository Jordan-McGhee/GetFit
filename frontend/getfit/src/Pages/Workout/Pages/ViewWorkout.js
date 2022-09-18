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
import convertDate from "../../../DateConversion/convertDate";

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



    const [ showModal, setShowModal ] = useState(false)
    
    const showDeleteModalHandler = () => {
        setShowModal(true)
    }

    const closeDeleteModalHandler = () => {
        setShowModal(false)
    }


    const date = loadedWorkout && loadedWorkout.created_at

    const convertedDate = convertDate(date)

    const workoutHeader = (
        <div className="flex items-baseline justify-between truncate max-w-full">
            <p className="truncate">
                { loadedWorkout && loadedWorkout.workoutTitle}
            </p>

            <p className="text-sm italic font-normal text-black/60">
                { convertedDate }
            </p>

        </div>
    )

    const workoutFooter = (
        <div>
            <Button
                type = "text"
                text = "Delete Workout"
                onClick = { showDeleteModalHandler }
                className = "bg-red-500 text-white/75 hover:text-white hover:bg-red-600 button rounded-md shadow hover:cursor-pointer mr-2 hover:scale-105 border-none"
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

            <Card
                header = { workoutHeader }
                footer = { workoutFooter }
                className = "p-6 rounded-lg border border-gray-2 text-xl bg-white shadow-lg mt-6"
                headerClass = 'font-bold text-3xl border-b-2 mb-4 pb-2'
            >

                <ul >

                    {/* ITERATE OVER EXERCISES TO DISPLAY THEM */}
                    { loadedWorkout && loadedWorkout.exercises.map(exercise => (
                        <li key = { exercise.id } className = 'mb-2 ml-6 pb-2'>
                            <h4 className="font-semibold text-xl text-black border-b w-fit pr-2">
                                { exercise.exerciseName }
                            </h4>

                            <div className="flex md:w-1/2 justify-between my-2">
                                <p>{ exercise.sets } Sets x { exercise.reps } Reps</p>
                                {/* <p>{ exercise.reps } Reps</p> */}
                                <p>Last Weight: { exercise.weightUsed } </p>
                            </div>
                        </li>
                    ))}

                </ul>

            </Card>

        </React.Fragment>
    )
}

export default ViewWorkout