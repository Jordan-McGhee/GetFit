import React, { useContext } from "react"
import Modal from "../../../Components/UIElements/Modal"
import Button from "../../../Components/FormElements/Button"
import { useFetch } from "../../../Hooks/useFetch"
import MainLiftInputs from "./MainLiftInputs"
import { AuthContext } from "../../../Context/auth-context"

const UpdateMainLiftModal = (props) => {

    const auth = useContext(AuthContext)

    const { hasError, sendRequest, clearError } = useFetch()

    const user = props.user
    const mainLifts = props.mainLifts

    const submitUpdateHandler = async (event) => {
        event.preventDefault()

        const formData = {
            age: event.target[0].value,
            bodyWeight: event.target[1].value,
            benchPress: event.target[2].value,
            squat: event.target[3].value,
            deadlift: event.target[4].value,
            overHeadPress: event.target[5].value
        }

        const mainLiftMaxes = {
            benchPress: event.target[2].value,
            squat: event.target[3].value,
            deadlift: event.target[4].value,
            overHeadPress: event.target[5].value
        }

        try {
            await sendRequest(
                // URL
                `http://localhost:5000/user/${user._id}/updateInfo`,
                // METHOD
                "POST",
                // HEADERS
                {
                    'Content-Type': "application/json",
                    Authorization: 'Bearer ' + auth.token
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
        
        props.onUpdate(mainLiftMaxes)
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
            onSubmit = { submitUpdateHandler }
            error = { hasError }
            clearError = { clearError }
        >
            {/* inputs for each part of userMainLifts */}

            <MainLiftInputs user = { user } mainLifts = { mainLifts } />

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