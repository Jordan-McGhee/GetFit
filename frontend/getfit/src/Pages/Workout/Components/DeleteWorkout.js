import React, { useContext } from "react"
import Modal from "../../../Components/UIElements/Modal"
import Button from "../../../Components/FormElements/Button"
import { useFetch } from "../../../Hooks/useFetch"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../../Context/auth-context"

const DeleteWorkout = (props) => {

    const auth = useContext(AuthContext)

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
                "DELETE",
                // HEADERS
                {
                    Authorization: 'Bearer ' + auth.token
                }
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
                className = "bg-red-500 button rounded-md shadow hover:cursor-pointer m-1"
            />
        </div>
    )

    return (
        <Modal
            header = {`Confirm Delete Workout`}
            footer = { footer }
            show = { props.show }
            error = { hasError }
            clearError = { clearError }
        >
            <p>Are you sure you want to delete <span>{workout.workoutTitle}</span>. This can't be undone.</p>
            
        </Modal>
    )
}

export default DeleteWorkout