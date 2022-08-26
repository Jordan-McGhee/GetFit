import React from "react"
import Modal from "../../../Components/UIElements/Modal"
import Button from "../../../Components/FormElements/Button"
import { useFetch } from "../../../Hooks/useFetch"
import { useNavigate } from "react-router-dom"
import MainLiftInputs from "./MainLiftInputs"

const UpdateMainLiftModal = (props) => {

    const { hasError, sendRequest, clearError } = useFetch()

    const user = props.user

    let navigate = useNavigate()

    const submitDeleteHandler = async (event) => {
        event.preventDefault()

        console.log(event.target)
        console.log(`Length of Target: ${event.target.length}`)

        const formData = {
            age: event.target[0].value,
            bodyWeight: event.target[1].value,
            benchPress: event.target[2].value,
            squat: event.target[3].value,
            deadlift: event.target[4].value,
            overHeadPress: event.target[5].value,
        }

        try {
            await sendRequest(
                // URL
                `http://localhost:5000/user/${user._id}/updateInfo`,
                // METHOD
                "POST",
                // HEADERS
                {
                    'Content-Type': "application/json"
                },
                // BODY
                JSON.stringify({
                    age: formData.age,
                    bodyWeight: formData.bodyWeight,
                    benchPress: formData.benchPress,
                    squat: formData.squat,
                    deadlift: formData.deadlift,
                    overHeadPress: formData.overHeadPress
                })
            )
        } catch(err) {
            console.log(`Error updating main lifts: ${err}`)
        }
        
        { props.onCancel() }
        navigate("/")
    }

    const footer = (
        <div>
            <Button
                text = "Nevermind"
                type = "button"
                onClick = { props.onCancel }
            />

            <Button
                text = "Save Changes"
                type = "submit"
            />
        </div>
    )

    return (
        <Modal
            header = {`Update User Info`}
            // footer = { footer }
            show = { props.show }
            onSubmit = { submitDeleteHandler }
            // error = { hasError }
            // clearError = { clearError }
        >
            {/* inputs for each part of userMainLifts */}

            <MainLiftInputs user = { user } />

            <footer>
                <Button
                    text = "Nevermind"
                    type = "button"
                    onClick = { props.onCancel }
                />

                <Button
                    text = "Save Changes"
                    type = "submit"
                />
            </footer>

        </Modal>
    )
}

export default UpdateMainLiftModal