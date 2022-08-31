import React, { useState } from "react";

import Button from "../../../Components/FormElements/Button";
import Card from "../../../Components/UIElements/Card";
import Input from "../../../Components/FormElements/Input";
import ExerciseInput from "./ExerciseInput";

const WorkoutForm = (props) => {

    let exerciseInputs = []

    // STATES
    const [ exerciseInputsList, setExerciseInputsList ] = useState(exerciseInputs)
    const [ inputCount, setInputCount ] = useState(0)
    const [ formIsValid, setFormIsValid ] = useState(false)

    let newInput = 
        <ExerciseInput
            inputNumber = { exerciseInputs.length + inputCount + 1}
            key = { exerciseInputs.length + inputCount + 1}
        />

    // addInput handler function
    const addExerciseInput = () => {
        setExerciseInputsList([ ...exerciseInputsList, newInput ])
        setInputCount(inputCount + 1)
    }

    const removeExerciseInput = () => {
        setExerciseInputsList((prevExerciseInputsList) => {
            prevExerciseInputsList.pop()

            return prevExerciseInputsList
        })
        setInputCount(inputCount - 1)
    }

    return (
        <form>
            <Card>

            </Card>
        </form>
    )
}