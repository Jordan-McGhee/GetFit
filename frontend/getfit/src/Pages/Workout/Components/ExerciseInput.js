import React from "react";

import Input from "../../../Components/FormElements/Input";

const ExerciseInput = props => {
    return (

        <div>

            <Input
                id = "exercise"
                label = "Exercise Name"
                type = "text"
                placeholder = "Enter a name."
                errorText = "Please enter a name!"
            />

            <Input
                id = "exercise-sets"
                label = "Sets"
                type = "number"
                placeholder = "1"
                errorText = "Please enter a set count!"
            />

            <Input
                id = "exercise-reps"
                label = "Reps"
                type = "number"
                placeholder = "1"
                errorText = "Please enter a rep count!"
            />

            <Input
                id = "exercise-weight"
                label = "Weight"
                type = "number"
                placeholder = "1"
                errorText = "Please enter a the weight you used!"
            />

        </div>

    )
}

export default ExerciseInput