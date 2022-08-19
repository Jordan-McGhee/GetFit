import React from "react"
import Modal from "../../../Components/UIElements/Modal"
import Button from "../../../Components/FormElements/Button"
import { useFetch } from "../../../Hooks/useFetch"
import { useNavigate } from "react-router-dom"

const DeleteWorkout = (props) => {

    const { hasError, sendRequest, clearError } = useFetch()

    const workout = props.workout

    let navigate = useNavigate()

    const submitDeleteHandler = async (event) => {
        event.preventDefault()

        console.log("Entered submitHandler")

        try {
            await sendRequest(
                // URL
                `http://localhost:5000/workout/${workout._id}`,
                // METHOD
                "DELETE"
                // HEADERS

                // BODY
            )
        } catch(err) {
            console.log(`Error deleting workout: ${err}`)
        }
        
        navigate("/workout/all")
    }

    const footer = (
        <div>
            <Button
                text = "Nevermind"
                type = "button"
                onClick = { props.onCancel }
            />

            <Button
                text = "Delete"
                type = "submit"
                onClick = { submitDeleteHandler }
            />
        </div>
    )

    return (
        <Modal
            header = {`Confirm Delete Workout`}
            footer = { footer }
            show = { props.show }
            // error = { hasError }
            // clearError = { clearError }
        >
            <p>Are you sure you want to delete ${workout.workoutTitle}. This can't be undone.</p>
            
        </Modal>
    )
}

export default DeleteWorkout