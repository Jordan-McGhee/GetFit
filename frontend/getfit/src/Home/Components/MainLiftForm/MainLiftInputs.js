import React from "react";

import Input from "../../../Components/FormElements/Input";

const MainLiftInputs = (props) => {

    const user = props.user
    const mainLifts = props.mainLifts

    return (
        <div>

            {/* AGE */}
            {/* <Input
                id = 'age'
                label = "Your Age"
                type = "number"
                placeholder = "Enter your age."
                errorText = "Please enter your age!"
                value = { user.age || null }
            /> */}

            {/* BODYWEIGHT */}
            {/* <Input
                id = 'bodyWeight'
                label = "Your Bodyweight"
                type = "number"
                placeholder = "Enter how much you weight."
                errorText = "Please enter your weight!"
                value = { user.bodyWeight || null }
            /> */}

            {/* BENCH PRESS */}
            <Input
                id = 'benchPress'
                label = "Your Bench Max"
                type = "number"
                placeholder = "Enter your bench max."
                errorText = "Please enter a max!"
                value = { mainLifts.benchPress || null }
            />

            {/* SQUAT */}
            <Input
                id = 'squat'
                label = "Your Squat Max"
                type = "number"
                placeholder = "Enter your Squat max."
                errorText = "Please enter a max!"
                value = { mainLifts.squat || null }
            />

            {/* DEADLIFT */}
            <Input
                id = 'deadlift'
                label = "Your Deadlift Max"
                type = "number"
                placeholder = "Enter your deadlift max."
                errorText = "Please enter a max!"
                value = { mainLifts.deadlift || null }
            />

            {/* OVERHEAD PRESS */}
            <Input
                id = 'overHeadPress'
                label = "Your Overhead Press Max"
                type = "number"
                placeholder = "Enter your overhead press max."
                errorText = "Please enter a max!"
                value = { mainLifts.overHeadPress || null }
            />

        </div>
    )
}

export default MainLiftInputs