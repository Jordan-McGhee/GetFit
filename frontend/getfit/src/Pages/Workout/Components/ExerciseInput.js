import React from "react";

import Input from "../../../Components/FormElements/Input";

const ExerciseInput = props => {
    return (

        <div>

            <Input
                id = {`exercise${props.inputNumber}`}
                label = "Exercise Name"
                type = "text"
                placeholder = "Enter a name."
                errorText = "Please enter a name!"
                value = { props.exerciseName || null }
            />

            <Input
                id = {`exercise${props.inputNumber}-sets`}
                label = "Sets"
                type = "number"
                placeholder = "1"
                errorText = "Please enter a set count!"
                value = { props.exerciseSets || null }
            />

            <Input
                id = {`exercise${props.inputNumber}-reps`}
                label = "Reps"
                type = "number"
                placeholder = "1"
                errorText = "Please enter a rep count!"
                value = { props.exerciseReps || null }
            />

            <Input
                id = {`exercise${props.inputNumber}-weight`}
                label = "Weight"
                type = "number"
                placeholder = "1"
                errorText = "Please enter a the weight you used!"
                value = { props.exerciseWeightUsed || null }
            />

        </div>

    )
}

export default ExerciseInput