import React from "react";

import Input from "../../../Components/FormElements/Input";

const ExerciseInput = props => {
    return (

        <div className="">

            <Input
                id = {`exercise${props.inputNumber}-name`}
                label = "Exercise Name"
                type = "text"
                placeholder = "Enter a name."
                errorText = "Please enter a name!"
                value = { props.exerciseName || null }
            />
            <div className="flex justify-between max-w-2xl mb-4">
                
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
                    errorText = "Please enter the weight you used!"
                    value = { props.exerciseWeightUsed || null }
                />
            
            </div>

        </div>

    )
}

export default ExerciseInput